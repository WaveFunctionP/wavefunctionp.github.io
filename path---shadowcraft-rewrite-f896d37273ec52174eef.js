webpackJsonp([39778283444740],{322:function(e,t){e.exports={data:{markdownRemark:{html:'<p>It has been a couple of weeks since the launch of the new frontend for <a href="http://shadowcraft.mmo-mumble.com/">ShadowCraft</a> and I thought that I would talk a bit about the project and what went well, as well as some of the mistakes we made along the way. (Here\'s <a href="http://shadowcraft.mmo-mumble.com/us/hyjal/aeriwen/">my character</a> as an example if you don\'t have one.)</p>\n<p>So, what is ShadowCraft? Well, strictly speaking, it is a Python script that uses \'steady state\' models to approximate the in-game performance of rogues. We call this the <a href="https://github.com/ShadowCraft/ShadowCraft-Engine">shadowcraft engine</a>. This is in contrast to the more common approach used by projects like SimulationCraft, which model player characters by simulating every detail of a player in combat. Because of the randomness inherent with all of the special abilities, one must run not just one simulation, but actually a great many and then average those simulations. This is a very computationally expensive proposition. SimC is rewritten in C++ by very competent developers, but nonetheless, it is not uncommon for players to have to run SimC for hours to check all of the various effects that they want to compare. One must be very careful to keep the number of permutations in variables low in order to even complete in a reasonable timeframe.</p>\n<p>ShadowCraft instead makes certain assumptions and uses averages to model characters. For instance, whereas a simulation would simulate swinging the players sword ingame thousands of times, ShC would instead model that as the average weapon damage over time. To get the total damage over the time frame of a typical fight, one only need the total time for the fight, and it is a inexpensive calculation to find the result. That is ShadowCraft in a nutshell. If you are familiar with spreadsheets, it is much like that. In fact, it started out from spreadsheet models. This allows for very quick comparisons, at the expense of accuracy and quite a bit of developer effort. This make it ideal for things like talent or gear comparisons after you know the behaviors in game. Generally you learn optimal rotations with simulation and then bake them into the models to compare gear, gems, enchants, or talents, or whatever else.</p>\n<p>Now that we understand that. <a href="https://github.com/ShadowCraft/shadowcraft-ui-react">This project</a> that I am talking about today concerns the website that interacts with the ShadowCraft engine and presents the results to the user. Previously, it was a standard Ruby on Rails web app. Server rendering, controllers, jQuery, Coffeescript, the whole nine yards. And it was old. It had a complicated build system, and you really needed to know Rails inside and out to work with it.</p>\n<p>Now I know that there are Rails developers out there that could have probably made an easy time with the project. The problem was that over and over we saw contributors, many of which were relatively new to development, that would come in, express interest, and then see the code base and the build, and quietly slip away. No one makes money from ShadowCraft. There is no patreon, we are hosted by the graces of mmo-mumble, and the little bit of ad revenue generated goes to offset the hosting costs. I\'m not saying the project needs money, just that there isn\'t much money to be had here, and certainly none for development. It is very much the result of a few passionate and committed players that keep it running. So having potential contributors walk away is a problem.</p>\n<p>We needed something simpler. And one that hopefully that leveraged javascript and it\'s much higher popularity and availability of developers. We chose a very thin <a href="http://flask.pocoo.org/">Flask backend</a>, which also leverages the fact that the engine runs in Python anyway, and it is very popular beginner developer language. For the client, we decided on <a href="https://reactjs.org/">React</a>. Mostly because it was popular and that it looked really easy to use. We are VERY happy that we chose React. It has been lovely to work with. There is no magic, and very little to learn. Exactly what we were looking for. The rewrite was mostly developed by Tamen and I, and neither of us had much experience with modern javascript front end development or javascript in general and it worked out just peachy. I can\'t say enough how happy we were with this choice. (I also sorta fell in love with javascript in the process. /swoon)</p>\n<p>We also utilize modern frontend tooling like Webpack, ESLint, Jest, etc. It also uses Immutable and Redux. I think we still have a ways to go with our build system, and I would definitely love to increase the test coverage, but we have all the most important bits covered by tests.</p>\n<p>We love <a href="https://redux.js.org/">Redux</a>, we came to it after lifting state and passing down handlers and sort of reached for it naturally. This approach worked great for us. We found out first hand why we needed it, and it was a very natural transition for us. I will say that it probably took me 2 or 3 weeks to understand it in practice. And dealing with nested state is still a bit of pain point, but after those growing pains, I love it. It has really had an influence over how I think about development in general, not just for React apps.\nSo what didn\'t go so well?</p>\n<p>The most obvious mistake that I think we made was doing a ground up rewrite. I was thinking 3, maybe 6 months, and it ended up being 12. The front end fell behind as a result, since it was basically just Tamen keeping the Rails app on life support and the engine fell behind with the loss of <a href="https://twitter.com/PlainSimpleBen">Fierydemise</a>. <a href="https://twitter.com/Mystler">Mystler</a> has done a remarkable job taking over the engine, but he could have used more support. Mostly I am talking about the Outlaw model, which has been useless for the entirety of the expansion. (Something I intended to help with, but got sidetracked with the front end, which is why I think it was a mistake.)</p>\n<p>I think that we did a disservice to our users with the rewrite instead of simply componentizing the rails app and making a slow transition over to the new stack. I\'m less sure that we would have ended up with the structure and some of the features that we have now, and maybe the current product is better than where we would have reached in the same timeframe. However, I do feel that the live app ended up not getting enough attention. But who really knows how it would have played out. You never really know with these things.</p>\n<p>Lesson: I will much more carefully consider any rewrite notions that I have for any future project.</p>\n<p><a href="https://facebook.github.io/immutable-js/">Immutablejs</a> is still a controversial decision that we actually made quite late in the process. We had trouble with mutation in the artifact component (and few other odd places), and there was a lot of articles about how to help enforce immutability and loads of recommendations for immutablejs. I\'ll be the first to say that I bought the arguments, and I was even quite enthusiastic about it at first. But after getting into the transition, that is when I discovered too late that you can\'t really do inheritance with immutablejs. Event though I came from the C# world, I don\'t really think everything needs to be OO, but some times, including on this project, we have coherent objects we want to deal with. and immutablejs makes that a pain.</p>\n<p>It also swallows any of the type/shape information about your objects that your tooling may have been able to provide before. Which was a huge let down for me. Immutable also reaches in a infects the entirety of your code base, which I found very distasteful for lack of a better description. We are now married to the library and it will be extremely painful to remove should it come to that point. Also being a fairly late decision, it probably ended up actually delaying the release for at least a month, maybe two, because we were tracking down all the errors that resulted.</p>\n<p>The library also adds another layer of knowledge needed to be productive with the project. I think we could have done without it, and simply relied more heavily on testing and tooling to detect mutation. Many of our problems with mutation were simply the result of inadequate formal testing. I beleive that if we had written testable code from the start we would have avoided most of these problems. This should probably be a separate lesson.</p>\n<p>Lesson: Don\'t be so quick to follow the pack in JS land. The person writing probably doesn\'t care the same way about type information, tooling, or developer experience as you do because all they\'ve known is vim/emacs and js/python/ruby. (Which is fine. I just have my own preferences and those factors are important for me.)</p>\n<p>So that\'s it. I think that covers the big stuff. There is still plenty of work to be done. I\'d like to refactor and reorganize the project to make it a bit clearer, and to improve testing. We also have some ideas for features that got put off for the initial release, but it is nice to see the project in maintenance. It was by far the largest project that I\'ve worked on significantly. And by far the most code that I\'ve written for a project. It was a very fulfilling accomplishment for me.</p>\n<p>It would not do to end this before saying that this project would not be complete with Tamen. The guy is a beast. I think something like 4/5ths or more of the code was written by him alone. It was fantastic working with him on this, and I continue to learn and be inspired by him. Thanks, Tamen. You are awesome. If you have the chance, be sure to <a href="https://twitter.com/tamenctr">thank him for his tremendous efforts</a>.</p>\n<p>And if you are looking for a project, and/or you love world of warcraft, please consider contributing. We have tons of work, and friendly people to work with. And if you are new, I can tell you it is a great way to get some experience with development. Just message me on ravenholdt or <a href="https://twitter.com/confusingbits">tweet me</a> how to get started.</p>',frontmatter:{title:"The Shadowcraft Rewrite",date:"2018-01-22T00:00:00.000Z"}}},pathContext:{slug:"/shadowcraft-rewrite/"}}}});
//# sourceMappingURL=path---shadowcraft-rewrite-f896d37273ec52174eef.js.map