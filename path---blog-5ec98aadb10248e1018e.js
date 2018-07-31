webpackJsonp([49683490770531],{315:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"C:/Users/mcore/Source/Repos/confusingbits.github.io/src/posts/first-post/index.md absPath of file >>> MarkdownRemark",html:'<p>Wow! I haven\'t blogged in years. Since about 2005, I believe. My old blog is now long gone. Maybe one day I\'ll resurect those <a href="https://web.archive.org/web/*/http://mctphysics.com/">old posts</a> from the internet archives. Not that I think there is much value in it. However, I do believe it has posts about my first attempts at javascript. Who knows.</p>\n<p>I have completed the transition of my blog over to <a href="https://www.gatsbyjs.org/">Gatsby</a>. One of the reasons I chose Gastby is that I can use my normal React workflow, but it will also staticly render all the assets for very fast load times. I had been using manual html files with html imports to handle things like headers and templating. While HTML imports worked fine for the most part, I just couldn\'t see myself doing much more than a very basic website with it. It doesn\'t seem like HTML imports is really going to catch on any way (probably for good reason).</p>\n<p>I knew that I didn\'t want to tie myself to Wordpress, which would have required me to get a domain name or link away from my GitHub profile page. Nevermind the issues with security. And if I was going to go with a server rendered site, it would probably be ASP.net on Azure. There is also <a href="https://jekyllrb.com/">Jekyll</a> (I misspell it every time it seems), which is what <a href="https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/">GitHub Pages</a> recommends, but I didn\'t want to hitch myself to the Ruby wagon. I already have enough tools to keep track of.</p>\n<p>But Gatsby...Gatsby has worked like a charm. I am very happy with the results so far. I am hopeful that this will work out in the longer term. I\'ve had tremendous fun putting it together. And maybe this can be an outlet for my many random rants instead of them being squirreled away in random social media posts.</p>\n<p>Time will tell.</p>',frontmatter:{title:"First!",date:"2017-12-14T00:00:00.000Z"},fields:{slug:"/first-post/"}}},{node:{id:"C:/Users/mcore/Source/Repos/confusingbits.github.io/src/posts/optimizing-landing-page/index.md absPath of file >>> MarkdownRemark",html:"<p>So now that the website has been converted over the Gatsby. I have been looking into performance.</p>\n<p>One of the neat things about Gatsby is that it will render your app out staticly and then load the rest of your app after the initial render. There is this interesting optimization you can use with your internal links to benefit from client side routing with Gatsby. I had seen it mentioned in the docs for Gastby, but it didn't click with me at the time. However, I came across a post by <a href=\"https://blog.scottnonnenberg.com/practical-gatsby-js/\">Scott Nonnenberg</a> who mentioned that one can avoid a full refresh of the page by utilizing the Link component provided by Gatsby, as opposed to the regular html anchor tags which I had been using. And finally my nagging question was answered as to why my site didn't feel as snappy as the default starter. Swapping those a tags to Links made a huge difference because now each route uses cached resources lazyloaded by Gastby. Awesome Sauce!</p>\n<p>With that handled I put my efforts on optimizing loading speed for the initial render. I knew that most people would be hitting my landing page first so I might as well start there. I first headed off to <a href=\"https://developers.google.com/speed/pagespeed/insights/\">PageSpeed Insights</a>, which is a tool offered by Google to analyze page performance. There are many other similar tools, but this one was pretty straitforward, and since I have no preference so I just went with it.</p>\n<p><img src=\"/initial-report-e76ffebab587c5ca8bbb6bc5f3d7b8c8.png\" alt=\"A sample report from google after a little optimization\"></p>\n<p>One of the messages was that the lightbulb 'hero image' on the landing page which I had been using was 4.3MB. which is obviously a lot to be loading on the inital render. And a general first approximation for improving perforamce is simply doing less work. And downloading a smaller file definitely is less work. I played with it a bit, but Google kept wanting a smaller image. And I'll admit I was afraid of ending up with a very weak image with high compression. I put the image through gimp and set the output to 80% quality and reducing the resolution to 1920x1080. Turns out it looks fine even at 1080 on my monitor. I ended up at 109kb, which is pretty good IMO.</p>\n<p>The blocking resources will have to wait for now, until I can get rid of the dependancy on Bootstrap. And I'm honestly not too worried about the caching thing. I plan on uploading every week, and it is currently at ten days. I don't expect there will be that many repeat visitors anyway. Let's be honest. I basicly talking to the void here. :P</p>",frontmatter:{title:"Optimizing the Landing Page",date:"2017-12-22T00:00:00.000Z"},fields:{slug:"/optimizing-landing-page/"}}},{node:{id:"C:/Users/mcore/Source/Repos/confusingbits.github.io/src/posts/shadowcraft-rewrite/index.md absPath of file >>> MarkdownRemark",html:'<p>It has been a couple of weeks since the launch of the new frontend for <a href="http://shadowcraft.mmo-mumble.com/">ShadowCraft</a> and I thought that I would talk a bit about the project and what went well, as well as some of the mistakes we made along the way. (Here\'s <a href="http://shadowcraft.mmo-mumble.com/us/hyjal/aeriwen/">my character</a> as an example if you don\'t have one.)</p>\n<p>So, what is ShadowCraft? Well, strictly speaking, it is a Python script that uses \'steady state\' models to approximate the in-game performance of rogues. We call this the <a href="https://github.com/ShadowCraft/ShadowCraft-Engine">shadowcraft engine</a>. This is in contrast to the more common approach used by projects like SimulationCraft, which model player characters by simulating every detail of a player in combat. Because of the randomness inherent with all of the special abilities, one must run not just one simulation, but actually a great many and then average those simulations. This is a very computationally expensive proposition. SimC is rewritten in C++ by very competent developers, but nonetheless, it is not uncommon for players to have to run SimC for hours to check all of the various effects that they want to compare. One must be very careful to keep the number of permutations in variables low in order to even complete in a reasonable timeframe.</p>\n<p>ShadowCraft instead makes certain assumptions and uses averages to model characters. For instance, whereas a simulation would simulate swinging the players sword ingame thousands of times, ShC would instead model that as the average weapon damage over time. To get the total damage over the time frame of a typical fight, one only need the total time for the fight, and it is a inexpensive calculation to find the result. That is ShadowCraft in a nutshell. If you are familiar with spreadsheets, it is much like that. In fact, it started out from spreadsheet models. This allows for very quick comparisons, at the expense of accuracy and quite a bit of developer effort. This make it ideal for things like talent or gear comparisons after you know the behaviors in game. Generally you learn optimal rotations with simulation and then bake them into the models to compare gear, gems, enchants, or talents, or whatever else.</p>\n<p>Now that we understand that. <a href="https://github.com/ShadowCraft/shadowcraft-ui-react">This project</a> that I am talking about today concerns the website that interacts with the ShadowCraft engine and presents the results to the user. Previously, it was a standard Ruby on Rails web app. Server rendering, controllers, jQuery, Coffeescript, the whole nine yards. And it was old. It had a complicated build system, and you really needed to know Rails inside and out to work with it.</p>\n<p>Now I know that there are Rails developers out there that could have probably made an easy time with the project. The problem was that over and over we saw contributors, many of which were relatively new to development, that would come in, express interest, and then see the code base and the build, and quietly slip away. No one makes money from ShadowCraft. There is no patreon, we are hosted by the graces of mmo-mumble, and the little bit of ad revenue generated goes to offset the hosting costs. I\'m not saying the project needs money, just that there isn\'t much money to be had here, and certainly none for development. It is very much the result of a few passionate and committed players that keep it running. So having potential contributors walk away is a problem.</p>\n<p>We needed something simpler. And one that hopefully that leveraged javascript and it\'s much higher popularity and availability of developers. We chose a very thin <a href="http://flask.pocoo.org/">Flask backend</a>, which also leverages the fact that the engine runs in Python anyway, and it is very popular beginner developer language. For the client, we decided on <a href="https://reactjs.org/">React</a>. Mostly because it was popular and that it looked really easy to use. We are VERY happy that we chose React. It has been lovely to work with. There is no magic, and very little to learn. Exactly what we were looking for. The rewrite was mostly developed by Tamen and I, and neither of us had much experience with modern javascript front end development or javascript in general and it worked out just peachy. I can\'t say enough how happy we were with this choice. (I also sorta fell in love with javascript in the process. /swoon)</p>\n<p>We also utilize modern frontend tooling like Webpack, ESLint, Jest, etc. It also uses Immutable and Redux. I think we still have a ways to go with our build system, and I would definitely love to increase the test coverage, but we have all the most important bits covered by tests.</p>\n<p>We love <a href="https://redux.js.org/">Redux</a>, we came to it after lifting state and passing down handlers and sort of reached for it naturally. This approach worked great for us. We found out first hand why we needed it, and it was a very natural transition for us. I will say that it probably took me 2 or 3 weeks to understand it in practice. And dealing with nested state is still a bit of pain point, but after those growing pains, I love it. It has really had an influence over how I think about development in general, not just for React apps.\nSo what didn\'t go so well?</p>\n<p>The most obvious mistake that I think we made was doing a ground up rewrite. I was thinking 3, maybe 6 months, and it ended up being 12. The front end fell behind as a result, since it was basically just Tamen keeping the Rails app on life support and the engine fell behind with the loss of <a href="https://twitter.com/PlainSimpleBen">Fierydemise</a>. <a href="https://twitter.com/Mystler">Mystler</a> has done a remarkable job taking over the engine, but he could have used more support. Mostly I am talking about the Outlaw model, which has been useless for the entirety of the expansion. (Something I intended to help with, but got sidetracked with the front end, which is why I think it was a mistake.)</p>\n<p>I think that we did a disservice to our users with the rewrite instead of simply componentizing the rails app and making a slow transition over to the new stack. I\'m less sure that we would have ended up with the structure and some of the features that we have now, and maybe the current product is better than where we would have reached in the same timeframe. However, I do feel that the live app ended up not getting enough attention. But who really knows how it would have played out. You never really know with these things.</p>\n<p>Lesson: I will much more carefully consider any rewrite notions that I have for any future project.</p>\n<p><a href="https://facebook.github.io/immutable-js/">Immutablejs</a> is still a controversial decision that we actually made quite late in the process. We had trouble with mutation in the artifact component (and few other odd places), and there was a lot of articles about how to help enforce immutability and loads of recommendations for immutablejs. I\'ll be the first to say that I bought the arguments, and I was even quite enthusiastic about it at first. But after getting into the transition, that is when I discovered too late that you can\'t really do inheritance with immutablejs. Event though I came from the C# world, I don\'t really think everything needs to be OO, but some times, including on this project, we have coherent objects we want to deal with. and immutablejs makes that a pain.</p>\n<p>It also swallows any of the type/shape information about your objects that your tooling may have been able to provide before. Which was a huge let down for me. Immutable also reaches in a infects the entirety of your code base, which I found very distasteful for lack of a better description. We are now married to the library and it will be extremely painful to remove should it come to that point. Also being a fairly late decision, it probably ended up actually delaying the release for at least a month, maybe two, because we were tracking down all the errors that resulted.</p>\n<p>The library also adds another layer of knowledge needed to be productive with the project. I think we could have done without it, and simply relied more heavily on testing and tooling to detect mutation. Many of our problems with mutation were simply the result of inadequate formal testing. I beleive that if we had written testable code from the start we would have avoided most of these problems. This should probably be a separate lesson.</p>\n<p>Lesson: Don\'t be so quick to follow the pack in JS land. The person writing probably doesn\'t care the same way about type information, tooling, or developer experience as you do because all they\'ve known is vim/emacs and js/python/ruby. (Which is fine. I just have my own preferences and those factors are important for me.)</p>\n<p>So that\'s it. I think that covers the big stuff. There is still plenty of work to be done. I\'d like to refactor and reorganize the project to make it a bit clearer, and to improve testing. We also have some ideas for features that got put off for the initial release, but it is nice to see the project in maintenance. It was by far the largest project that I\'ve worked on significantly. And by far the most code that I\'ve written for a project. It was a very fulfilling accomplishment for me.</p>\n<p>It would not do to end this before saying that this project would not be complete with Tamen. The guy is a beast. I think something like 4/5ths or more of the code was written by him alone. It was fantastic working with him on this, and I continue to learn and be inspired by him. Thanks, Tamen. You are awesome. If you have the chance, be sure to <a href="https://twitter.com/tamenctr">thank him for his tremendous efforts</a>.</p>\n<p>And if you are looking for a project, and/or you love world of warcraft, please consider contributing. We have tons of work, and friendly people to work with. And if you are new, I can tell you it is a great way to get some experience with development. Just message me on ravenholdt or <a href="https://twitter.com/confusingbits">tweet me</a> how to get started.</p>',frontmatter:{title:"The Shadowcraft Rewrite",date:"2018-01-22T00:00:00.000Z"},fields:{slug:"/shadowcraft-rewrite/"}}},{node:{id:"C:/Users/mcore/Source/Repos/confusingbits.github.io/src/posts/my-journey-my-first-dev-job/index.md absPath of file >>> MarkdownRemark",html:"<p>March 4, 2014 was when I first joined GitHub. Almost exactly 4 years ago from the day that I am writing this. Today I've been employed full time as a remote web developer for two months. I want to talk about my journey to full time development. This is mostly to benefit from those who are just now learning to code. You've probably been reading a lot about how to get your first development job. You've been building a portfolio and studying and practicing, and maybe you think you are ready. Or maybe you've just started and you've read about the great salaries and how easy it is to learn to code. There are a lot of success stories floating out there on the interwebs, but I want to tell mine, because most of the stories that you read are...optimistic. Maybe I am a huge outlier, and I'll get to that, but I don't think many of these 'learn to code and get a job in 2, 4, 6 months really tell a representative story.</p>\n<p>So, a bit about me. Growing up I've had access to a computer pretty much from the time that I could read. This may not sound odd now, but I'm nearing 40. My first computer was a Tandy 1000SX. Home computers were affordable, but they weren't extremely common. Atleast, in Mississippi they weren't. It was a family computer, but it was basicly mine in practice. I spent many a night typing the magic combination of keys that were given in the many BASIC books we had. Making shapes and colors and sounds. I had a friend who had an uncle that was a programmer that gave him a book on Turbo Pascal. We used it to fashion text adventures together when I would visit. To be clear though, I had no real notion of programming back then, only that I was well aquainted with the idea of it and very basic notions of syntax. Being a programmer wasn't really even on my radar.</p>\n<p>I started in IT officially when I join the Marine Corps. My MOS (job) was basicly as a help desk technician / network adminstration. I dabbled a bit with development while working as a logistics clerk for the company office. (Everyone has two 'jobs' in the Marines, your official one, and some duty you may be assigned temporarily.) I automated much of our administrative tasks by building a database and using various office suite software. This software was later moved up to the battion level and with the help of new Lieutenant, I got my first exposure to Visual Basic. After I left the Corps, I worked a few random jobs, but I also started a blog called MCTPhysics. This was the first time that I really started to learn to program. I wanted to make some collapsable buttons for the categories on my blog. So I hacked together a small script with javascript. I also had to modify templates in what I think was Perl. I still had very limited notions of how to program. I vividly rememebr being confused by the dot.access.syntax.of.javascript.</p>\n<p>I went on to study physics at a local university. I wanted to be a research scientist. During that time I was employed by a university laboratory working in nanotechnology. However, I wasn't a great student. I was more inclined to work on the interesting stuff in the lab than to study for classes. During that time I took my first real course on programming. First with FORTRAN because it was a requirement for my physics degree (Which I failed. Twice. As I said, I am a terrible student.) and later I took the proper introductory CS course which was done with C++, which I aced because at that point, because I knew the basic constructs of programming from FORTRAN and my physics studies had made me a very stubborn problem solver.</p>\n<p>My point in telling you all of that isn't to talk about myself. It is to demostrate that I didn't come into programming out of the blue. I had a history of exposure to it, and a technical background and education. I am unusually technically minded and a stubborn problem solver, but I'm not a gifted student or particularly hard working. I can't be because...</p>\n<p>I got sick. I couldn't continue my studies. And I couldn't work. And it was a real possibility that I might be sick for a very long time. I decided that it was time to switch from my dreams of doing research to doing something that I could possibly do from home. I decided to go into programming. I decided to combine another passion of mine, video games, with learning to program properly. I think that it is important to combine passions. It'll keep you going when you are burned out on learning to program and having an actual problem that you want to solve is a great motivator. I played a number of games regularly that you could do some programming with. One was WoW, and you could write UI addon for it in LUA, but I felt that it wouldn't be very marketable to learn LUA. Another game was Kerbal Space Program, which ran on the Unity game engine, which used C#.</p>\n<p>I thought that since C# was very popular with business, and if I did want to get into game development, Unity would be a decent choice, I decided to run with it. I started out modifying an existing mod for Kerbal Space Program called Interstellar. Tweaking it to my own liking and fixing bugs. I learned about git and github, which was where the original author hosted his code. I also created my own mod from scratch called ForScience, which was very popular. About a year after I started, the original mod author of Interstellar had abandoned the project, and my version was the only working version. I published my version and began work integrating the mob to play better with other mods. I released Interstellar Lite, and recieved my very first donation.</p>\n<p>But all was not well. I hadn't done enough research into my market. While C# was indeed very popular with business, there were relatively few jobs to go around in my area. And I had no degree, and my experience with C# was not with .Net. I had recieved literally no responses for my C# experience. I needed a wider net. And I was probably going to need to be remote, because my health still wasn't great. And remote jobs tend to require more seniority for typical .Net shops compared to web dev it seemed. So I began to learn web development. I chose to do FreeCodeCamp and it held my hand just enough to stay on track. I created my portfolio site around 3 years ago. I already knew the basics of HTML and CSS, and learning javascript was fairly easy as far as the basic syntax goes. I continued with the program and maintaining my mods for a couple of years.</p>\n<p>About a year ago, my health had started to improve, and I was looking to get a job very seriously. I also had developed relatioships through the World of Warcraft community and there was an opportunity to work on a web app project. And so we started the shadowcraft rewrite, and I began to learn React and all of the modern javascript tooling/ecosystem. I wrote about that <a href=\"/shadowcraft-rewrite\">elsewhere</a> if you'd like to read about that project. I took a year to complete that project. Until January of this year. But I started getting responses about my javascript, and in particular React, experience almost immediately. First technical was in May, and every month saw more and more interviews and technicals. But I was still very discouraged. I was getting past phone screens all the time, and the technicals would seem to go well, but for whatever reason, the opportunies would fall through. I can't state enough how discouraging this was.</p>\n<p>I was commited though. I knew that eventually someone would finally bite. That eventually my skills would be apparent enough that I couldn't be denied because of my education and work history. I did get a few small contracts on UpWork during this time, which kept me going. And one day in Nov, I get an interview for a company and they hired me on the spot. I was immediately tasked with doing some technical planning for a new project and all seemed well. And then a week went by, and then another. The company had just died off.</p>\n<p>I took consolation that I did make some money. But I was back to square one. Atleast now I had a company to put on my resume. I was still technically employed by them, just without any active project.</p>\n<p>Then it really did happen. I get call from a client on Upwork, and they seemed confident that they have plenty of work. I'm hired on for a couple of weeks on a react project, and then they want me to come out to San Fransisco on a react native project for a new client for a couple of weeks, and then new .Net project comes up. I'm asked to sign a contract directly with the comany. I have more work than I know what to do with and I'm working with great people with tons of different technologies. I love it. I feel vindicated for all of those years of struggle.</p>\n<p>I also learned that I could have been employed a few years ago. I was ready then. Some of my coworkers were very much junior to me. I just didn't have the opportunity or the right marketing. If I was in a more populated area or if I had started with a technology that moves fast like the web, I would have been better off.</p>\n<p>If you don't have a degree and you are in a relatively low population area without much opportunies, your road is going to be more difficult than someone in a populate area or with a degree. Even if you are willing relocate at your own expense, companies are going to be more risk adverse. If you don't have a degree, trying to get a job at a standard business is going to be a very tough sell. Almost all of my big hits were from software/tech companies. Traditional businesses want that degree because they don't understand that programming is a practical, creative skill, not just an academic one. If you are starting out, I would recommend a degree if you can afford one. I plan on finishing my degree as well, now that I have some income to afford it. It is worth the money, but you still need to learn to program. You do actually need to know a framework and the landscape of your chosen technology.</p>\n<p>Some interesting things that I learned during the process of hundred real of applications (not just click > apply).</p>\n<p>Research your market. Make sure there are plenty of jobs available for a technology that are looking for people like you before you invest in learning that technology. And try to pick a technology that is newer so that you don't face as much competition with people with more experience than you. Don't learn web forms, learn .net core. Don't learn Swing, learn Kotlin. Don't learn jquery, learn angular. That sort of thing.</p>\n<p>My porfolio was just about useless. Both the website and my github account. I still think it is a good idea to have one. I learned a lot from those things over the years, but the recruiters, HR reps, and technical interviewers will hardly ever look at it. I was a surpise when an interviewer knew anything about me or my projects.</p>\n<p>Keep your resume short. Don't bother with an objective. Explicitly state each technology applicable. You don't know how many times I was asked if I knew HTML/CSS or HTML5 or whatever even though I have javascript and react and other web technologies on my resume. Or my favorite. Do you know T-SQL when it clearly says SQL. The people reading your resume do not know anything about what they are hiring for. If you don't say the magic words, they won't understand. You are fluent in greek, they only know what is in thier phrase book.</p>\n<p>When they ask you to tell them something about yourself, keep it short. Like two or three sentences. For whatever reason, people seem to judge your experience more optimisticly if you leave out details. If you go into more detail, you risk exposing that you don't know something they think is critical. Don't ever pass yourself off as a junior, pass yourself off a yourself. Don't say you have more experience than you do, but don't let on that you don't know something. This is contrary to all of the advice I've seen. Everyone says that you should say when you don't know something and that they are looking for curious learners.</p>\n<p>This is bullshit and I don't know where it comes from, but you are being hired as an expert. You don't want a junior surgeon, you want the surgeon that has done the thing 10000 times with zero complications. This is more true for the non-technical people in the hiring process. To HR and the CEO, you should be a god like miracle worker with infinite knowledge. To the technical director, you may not be sure, but this seems related to that and you have experience with that, and would be excited to work with it.</p>\n<p>Get your first job, then think about your dream job. Don't do those practice sites. Learn real skills. Learn a framework/libary and use it extensively. Ignore the vanilla javascript peeps. You aren't being hired because you know javascript event loop. You aren't being hired because you know how to bind/call/apply. You are being hired because you can make a button turn blue or track down a mutation bug in Redux while the website is on fire. You are being hired to solve actual problems and build features, not because you know the algorithic effeciency of bubble sort. They want you to be fast on an interview, even though you can take as much time as you need. The way you get fast is by doing it a lot, and to do that you need to build, build, build. You need to write tens of thousands of lines of code. As much as you can. You ideally need to work on a project that is actually used by people. You need to know what it feels like when things go wrong and the stress rises. You need to get stuck. Like really and truely dumbfounded. You need to learn how to claw your way out of the hole when you are hopelessly lost. You need to learn to learn.</p>\n<p>I think that anyone can learn to program. I also think that it takes a special type of person to do it well, and enjoy it. I think that you need a enjoy hard problems. Maybe I am projecting, I don't know. But I think that is very unusual for the average joe to just pick up a book on programming or follow a course and learn to program well enough to be employed. I think I've read that something like half of these bootcamps are attended by someone that already had a job programming. I am very skeptical that someone without connections learns to program in a few months and is making tons of money. I think that it takes years of exposure to be ready to work on all but the most trival projects. I think that the reason you see these articles about getting a job 3 months after learning to program are exceptional exactly because it is exceptional. If it were routine, there would be little value in sharing the story because it would be a story we've all heard. And I've seen more than a few where it was clear that the person had previous exposure to programming.</p>\n<p>If you made it this far, firstly, thanks, as I know this was quite lengthy. And secondly, my point isn't to discourage someone. I just think that a lot of media tried to play it up like it is easier to do than at least my experience. If you look around, you'll probably see that it is far more common to hear about someone having a hard time getting thier first dev job, even from CS degree graduates. But it is worth it, at least to me, having gone through the process. I work from home now. And I get to learn new things every day, which I love. I found my place, and I hope that you can find yours.</p>",frontmatter:{title:"My Jouney To My First Dev Job",date:"2018-03-18T00:00:00.000Z"},fields:{slug:"/my-journey-my-first-dev-job/"}}},{node:{id:"C:/Users/mcore/Source/Repos/confusingbits.github.io/src/posts/goodnight-shadowcraft/index.md absPath of file >>> MarkdownRemark",html:"<p>As you may have well heard by now, shadowcraft is being discontinued. Working on ShC was a fantastic experience. I am extremely proud of the front-end re-write, not just because I helped build it, but because it really is the front end this app needed after all these years. But we just couldn't get the engine up to the level of accuracy that players expect today. The level of sophistication that players want from their tools is far beyond what a model will produce without tremendous effort. And the pace of change in the game and complexities of the models makes that effort difficult.</p>\n<p>Regular players are generally happy with stat priorities, as they should be. But you don't even need to download anything to run a sim today with tools like raidbots. The hardcore players want to optimize for specific fights and specific mechanics. Something that is difficult to support for models.</p>\n<p>Models are still easier to use for playing around with basic gear and stats, and we had considered trying to retrofit ShC to use simc on the backend, possibly compiling simc for the browser (not even sure how feasible that would be). But I had already been toying with the idea to run the ShC engine in the browser just to get more performance. A simulation really wouldn't work with the level of interactivity we expect from shadowcraft. There are just so many gear permutations now.</p>\n<p>The community has really coalesced around simulation, for better or worse. I take solace that we were the last major modeling tool standing at least. And certainly the most interactive character optimization app.</p>\n<p>There is also the human factor behind this. All of us devs are constantly busy with other projects and recruitment efforts have proven ineffective. When I started on ShC, I was an aspiring developer, and since then I landed a development job and started a career in software development. And it is in no small part because of this project, and not the least because of the great developers that helped guide me on this project.</p>\n<p>If this sounds like I'm making excuses. It is because I am. It was very hard to let go of the project. It is hard to express how saddened I was to discontinue shadowcraft. I had made a name for myself, such as it is, in the WoW community on the official forums helping answer questions for fellow players, often using shadowcraft to show how things worked or dig into sticky questions. The beginnings of shadowcraft has paralleled my beginnings in the wider wow community. Seeing it go while I also see myself moving away from the wow community since starting my new career was surprisingly emotional. So many people have put their time and passion into this game, and into the tools that players use, it speaks to the tremendous spirit of our fellow players, and why we all got so involved with this amazing community.</p>",
frontmatter:{title:"Good Night, Shadowcraft",date:"2018-07-30T00:00:00.000Z"},fields:{slug:"/goodnight-shadowcraft/"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---blog-5ec98aadb10248e1018e.js.map