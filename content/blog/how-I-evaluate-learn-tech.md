---
{
  "type": "blog",
  "author": "Corey Thompson",
  "title": "How I Evaluate and Learn New Tech",
  "description": "Maybe you'll find this pattern useful as well.",
  "image": "images/article-covers/learning-books.jpg",
  "published": "2020-11-23",
  "draft": true,
}
---

Like many in the software industry, I'm always learning new technologies. Sometimes it is because I need to learn something to diagnose a problem and other times it is to get more efficient at some project that I'm current assigned. Those are a given, but I don't want to talk about those types of "assigned" knowledge gaps, but instead I want to talk about how to learn when given the option to learn anything.

There are so many interesting things to learn, and obviously no where near enough time to learn them all, so we must be judicious in what we decide to learn.

For me, I like to tend to evaluate things based on a combination of values that I prioritize. I want a successful career, and I don't want to stuck working technology that I do not have any faith in.

Let me state some things that may already be obvious, but they need to be said nonetheless.

CPUs are not getting faster. They are getting more efficient. They are getting more cores. They are getting faster memory access. But they are not really getting faster. This has largely been true my entire career in IT.

Around the time I first entered IT, the Pentium 4 came out, and topped out at 3.5 Ghz in the early 2000's. Which is about the same speed as a modern desktop processor now. The brand new Ryzen 5 desktop processors run at about 3.5Ghz, and boost to near 5Ghz. Nearly 20 years, and less than a doubling of raw clock rate. This is a FAR cry slower rate of progress that we've seen for most of computing history. This definitely not the whole story, as these modern cpus are using a lot more fancy tricks today to speed up calculations, but it is a major metric that has all but completely stalled.

The thing that has exploded is specialize processing units like GPUS, memory speeds (notably the move from HDDs to SSDS), and interface speeds. Also an explosion of system on chip designs and low power consumption designs. And most obiously, cores have exploded in number. Quad core is pretty much a minimum now for a budget desktop, dual core can't keep up with all of the processes running on machines today.

The software industry has had is easy. We got to ride on decades of hardware advances to fund our more and more expensive software design choices. Now we are expanding our applications across multiple processes to try and keep the ponzi scheme afloat.

That's the major challenge that I believe will be essential to recognize and I am suiting my technologies choices to match.

###We need our tools to be more efficient.

Another challenge that I've identified is that most of the complexity I deal with day to day is mismatched modeling of domains. This occurs all over the places. Once you see it, you start seeing it everywhere. We allow our systems to model what should be impossible states and then try to enforce it through validation and contraints. The root cause of downstream complexity is mismatch domain models.

For instance, we allow a user to signup, and there is a requirement that the user must validate thier email before we allow them to login. But we already created the user entry on the user table, and then depend on a flag that always needs to be checked to see if they are valid or not. We should have created a registration for a new user, and then only create the user after the registration has been validated. Now every user is always a validated user.

It's having to call multiple endpoints to finalize some process that needs to be atomic. This is a transaction that is not expressed in the api which can and will result in orphaned resources when the full process isn't or can't be completed.

###We need our tools to allow for richer domain modeling to make these states impossible.

There will come a day when a major disaster occurs and it is going to be caused by bad software. [Knight Capitol](https://en.wikipedia.org/wiki/Knight_Capital_Group) was perhaps the most well known. More recently is the [Boeing 737 Max](https://en.wikipedia.org/wiki/Boeing_737_MAX_groundings) which are trotted out as examples. As an industry, we need to be able to show that our tools and practices are sound to avoid regulation in the name of safety. If you follow [Uncle Bob](https://en.wikipedia.org/wiki/Robert_C._Martin) of Clean Code fame, you'll have heard this before, and I completely agree with him. In fact, much of this entire article is the result of much of his work. I'm not saying anything new here.

###We need our tools and processes to be reliable by design.

With all of this as a given, here's this has been my strategy going forward.

I'm focusing on new technologies that emphasis native execution or near native.

I'm focusing on technology that lets me express domain logic clearly and model the domain as exactly as possible.

I'm focusing on technologies that will allow me to avoid bugs from being expressed at all.

To me, this means something more functional. Languages with mathematical underpinnings. Algebraic data types, automatic type systems that prevent bugs, and minimal dependencies.

In keeping with that, for the last year, I've been learning functional languages. I mean pure, staticly typed, functional languages with rich, automatic type inference. There are functional languages that allow mutability and/or where missing features like type inference, dynamic types, or really just syntactic bandaids over other related runtimes. Just requiring pure, static types eliminated a lot of the [options](https://en.wikipedia.org/wiki/Comparison_of_functional_programming_languages).

I've been building more with [Elm](https://elm-lang.org/), which is the safest and most expressive language that I've ever experienced. The bulk of my work is frontend web, so this is a more immediate investment.

To suppliment Elm, and learn the more advanced parts of functional programming (notably type classes and category theory) I've been learning Haskell using [The Haskell Book](https://haskellbook.com/). Haskel also creates native binaries that can often reach near C speeds, and allows for safe parallelization to utilize all of those cores we are being given today. Taking advantage of where hardware is going today and into the future. This is my more long term technology investment.

And finally, I've decided to learn Rust next year. It is an imperative langauge, but it has a safety first design and rich type system. It's getting all of the important things right with the design, and has built in options to depreciate features in the future with it's editions feature, so it can continue to innovate, and it produces fast native, near zero runtime binaries. And it is thread safe. This is my longest term, most speculative investment.

I'm also learning platform technologies like [Hasura](https://hasura.io/) which makes it nearly impossible to design overly complicated apis and forces you to think about your modeling, and how to handle api side effects. Honorable mention is [Postgrest](http://postgrest.org/en/v7.0.0/). Notably, both are using Haskell as key technologies.

I'm continually learning Postgres, because, well, you gotta choose a DB and this one is free, extensible, and proactively developed.

I also keep my eye on .Net technologies. They are always doing something interesting, and the new .Net 5 / crossplatform focus is appealing. Still waiting to see thier verion of crossplatform UI framework with MVU, hopefully with F# support and native pre-compilation.

What am I not learning? I'm not actively learning Vue or Svelte. They aren't doing anything significantly better than React, and some of these new frameworks backslide on many of the [lessons we learned](https://www.youtube.com/watch?v=x7cQ3mrcKaY) to get to React. I was notable disapointed with Blazor for this reason, although I understand why they kept the razor paradigm.

I'm not learning another marginally different MVC/API framework. I'm not learning another marginally different crossplatform UI framework. Don't get me wrong, I'll use whatever comes along, and take on the projects and problems as they present themselves, but if they aren't hitting one of those above three challenges in any significant way, then it like treading water to me. I'm not going to focus my free time on them.

###How to I actually go about learning new things?

I'll usually watch a talk introducing the technologies. One of those "pitch meeting" demos that explains the technology and what it is solving. That "Rethinking Best Practices" video I linked above about React is a good example of one or the [Time Traveling Debugging](https://www.youtube.com/watch?v=xsSnOQynTHs) one about Redux.

Then I'll watch a few more indepth videos that demostrate how the technology solves some issue or the other more indepth. [Making Impossible States Impossible](https://www.youtube.com/watch?v=IcgmSRJHu_8) by Richard Feldman or [Building a Toolkit for Design](https://www.youtube.com/watch?v=Ie-gqwSHQr0&t) by Matthew Griffith are good examples of these types of talks that helped sell me on Elm.

For either of the steps above, I'm not usually going out of my way to watch these. I'm always watching conference talks on tech nearly every day.

If I'm sufficiently interested, I'll go and make a demo projects following the tech's introductory documentation. I'll play with it for a few hours trying different things on an evening or over the weekend.

Then I'll try building one of my simpler backlog projects with the technology where it is suitable. Or reimpliment something from work for a direct comparison. I'll usually sign up for any community slack/discord or subreddits at this time.

At some point, I'll start reading the official documentation or pick up a book that is highly recommended by that tech's community on the topic.

Usually that point is around the time I'm working on significant project with the technology. I know some people like to learn just by jumping in blind and trying, and other people like to read all of the documenation or grab a book. But this is my process. I try to keep time investment minimal early in the process.

So anyway, maybe this sparked some thoughts about your process. Feel free to [tell me all about it](https://twitter.com/confusingbits).