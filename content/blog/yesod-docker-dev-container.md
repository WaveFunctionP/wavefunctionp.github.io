---
{
  "type": "blog",
  "author": "Corey Thompson",
  "title": "Yesod Dev Container using Docker (on Windows)",
  "description": "How to setup a docker container for Yesod/Haskell development on Windows",
  "image": "images/article-covers/yesod.png",
  "draft": false,
  "published": "2020-08-29",
}
---

So, I've been learning Haskell and I believe I've learned enough syntax to begin working with more non-trivial applications, and since javascript/web applications are my primary domain, a web framework makes sense.

Throwing a bit of a monkey wrench into this process, I've run into difficulty running a few haskell projects on windows. Plus I don't want to clutter up my personal machine with a bunch of dev tooling. Using docker is a great way to isolate your dev environment, not just deployments.

You probably want code, so here it is. I won't ramble until afterwards.

```
# Dockerfile

FROM fpco/stack-build

WORKDIR /yesod-test/
COPY . .

RUN stack setup
RUN stack install yesod-bin --install-ghc
RUN stack build

EXPOSE 3030
```

Using the `haskell` docker image as the base image wouldn't compile due to some error with blaze-html or something, which I didn't bother to investigate (there was basic no other information in the error output but the name). `fpco/stack-build` is apparently an image that has all dependencies needed to build packages on stackage, which is exactly the source of our deps, so this is close to ideal, at least for development.

This uses the fpco stack image, sets the current directory to the folder where we will mount all of the files for the project (yesod-test). From there it is standard yesdo commands.

The port exposed must be the same as the one set in the `command` in docker compose. The yesod dev process ignores any of the project config vars, you need to set the port using the cli flag, as far as I know.

```
# docker-compose.yml

web:
    build: .
    command: stack exec -- yesod devel --port 3030
    stdin_open: true
    ports:
        - '3030:3030'
    volumes:
        - .:/yesod-test
        - /yesod-test/.stack-work
        - /yesod-test/yesod-devel
```

I'm still learning docker as well, which means I still constantly run into issues with it, and quite often the images or configs that I find are out of date. I was able to get a dev container to compile with this process. The volumes also mount the project files inside the container so that the file watchers can detect changes and recompile the project and automatically refresh the page like any sane modern development workflow.

Note the matching port numbers. All the volumes are build artifacts we want to persist or project files

`stdin_open: true` is needed for some [arcane reason](https://github.com/commercialhaskell/stack/issues/5062)

It is frustrating to run into so many issue on Windows with Haskell when going beyond trivial exercises with GHCI. I've thoroughly enjoy learning so far with [The Haskell Book](https://haskellbook.com/) but moving beyond exercise has been a trial of patience so far. I didn't have much luck with [Miso](https://haskell-miso.org/) (ran into issues with GHCJS, undocumented nix dependencies) or [gi-gtx-declarative](https://owickstrom.github.io/gi-gtk-declarative/) (couldn't get everything installed without errors) despite being very excited about those projects.

I'm sure much of this is my inexperience, but it's frustrating to see such a cool language being hamstrung by such a poor initial developer experience. People don't learn a language to play in a REPL, they want to build useful applications and [something like half](https://owickstrom.github.io/gi-gtk-declarative/) of all developers are on windows. Building web and native applications should have first tier support on Windows IMO. Yet like 80% of the talks I see on Haskell are about type and theory arcana.

If Haskell is so a robust and productive language, then why is it's tooling and support so lackluster? I like the language so far, I've learned a ton, and I'm excited to continue using it to build cool applications. This isn't me hating on Haskell, this is sincere, but frank honesty.

Haskell isn't alone. I've run into issues with OCaml, ReasonML, and to a much lesser extent F#. The only pure, typed functional language that I see executing on great developer experience seems to be Elm.

Well... anywho, sorry for the rant into the void. I hope someone at least found the docker configs helpful. Feel free to [tweet me](https://twitter.com/confusingbits) about how I'm wrong. (No really, I love discussions.)
