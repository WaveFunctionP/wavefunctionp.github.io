webpackJsonp([0xc260c743ec7c],{423:function(e,t,a){e.exports=a.p+"static/ForScience.eaa21867.jpg"},424:function(e,t,a){e.exports=a.p+"static/InterstellarLite.0a572555.jpg"},425:function(e,t,a){e.exports=a.p+"static/SimpleScienceFix.20bdb320.jpg"},426:function(e,t,a){e.exports=a.p+"static/guildstatus.a41d240a.jpg"},431:function(e,t,a){e.exports=a.p+"static/shc.83cb0fd3.jpg"},187:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(2),n=l(s),o=a(31),r=(l(o),a(431)),i=l(r),c=a(426),d=l(c),m=a(425),u=l(m),h=a(423),f=l(h),p=a(424),g=l(p),w=function(){return n.default.createElement("div",{className:"container"},n.default.createElement("div",{className:"row"},n.default.createElement("h4",{className:"page-header"},"Shadowcraft Webapp Rewrite"),n.default.createElement("div",{className:"col-xs-12 col-sm-6 col-sm-push-6"},n.default.createElement("img",{className:"img-responsive img-rounded",src:i.default})),n.default.createElement("div",{className:"col-xs-12 col-sm-6 col-sm-pull-6"},n.default.createElement("p",null,"A rewrite of the ",n.default.createElement("a",{href:"http://shadowcraft.mmo-mumble.com/us/hyjal/aeriwen/"},"Shadowcraft")," webapp from ",n.default.createElement("a",{href:"https://github.com/cheald/shadowcraft-ui"},"Rails/Coffeescript")," to",n.default.createElement("a",{href:"https://github.com/ShadowCraft/shadowcraft-ui-react"},"React/Redux/Flask"),". The website itself is used by hundreds of thousands of users. Players use the website optimize their characters in the game, World of Warcraft. When a game update comes out, there is usually a delay getting the new game information encoded into the website to make the proper recommendations. A big limitation of this was a) having enough contributors that are knowledgeable of technologies used in the project and b) the constant battle of keeping the frontend in sync with the changing game and engine objects"),n.default.createElement("h4",null,n.default.createElement("small",null,"Notable features:")),n.default.createElement("p",null,"Much more maintainable code. The functional style paradigms of React/Redux ensures a more sane rendering of the very complex business logic involved with the game. The engine itself, which is a separate project and handles the core business logic now provides a configuration object that is simply rendered instead of having to touch both the ui and engine every time there is a change, and ensures that communication between the front end and backend apis/states are always in sync. In the process we've greatly simplified developer and deployment experience, as well as knowledge requirements needed to work on the project by removing dependencies on complicated technologies."),n.default.createElement("h4",null,n.default.createElement("small",null,"Technical challenges:")),n.default.createElement("p",null,"Componetizing the views with react would have been simple enough, but the backend had to be completely written to remove the dependency on Rails paradigms, and the Coffeescript was completely abandoned because a) it was a mess and b) mixing manual dom manipulation with react can be problematic. Fortunately, we have had no set deadline, which has allowed for a great deal flexibility."),n.default.createElement("p",null,n.default.createElement("small",null,"Under development")))),n.default.createElement("div",{className:"row"},n.default.createElement("h4",{className:"page-header"},"Guild Status Page"),n.default.createElement("div",{className:"col-xs-12 col-sm-6 col-sm-push-6"},n.default.createElement("img",{className:"img-responsive img-rounded",src:d.default})),n.default.createElement("div",{className:"col-xs-12 col-sm-6 col-sm-pull-6"},n.default.createElement("p",null,"The page would monitor the status of my World of Warcraft guild, Regulators. It was used by the guild leadership to identify gear issues within the raid membership."),n.default.createElement("h4",null,n.default.createElement("small",null,"Notable features:")),n.default.createElement("p",null,"Flags and highlights any gear issues present like missing enchants or gems on individual items according to guild policy. The items are also formatted to display proper tooltips from Wowhead.com."),n.default.createElement("h4",null,n.default.createElement("small",null,"Technical challenges:")),n.default.createElement("p",null,"The backend is a script written in Node.js that retrieves json data from the Battle.Net API. That data is then reduced and transformed into a static json file which is ",n.default.createElement("a",{href:"https://github.com/confusingbits/confusingbits.github.io"},"uploaded to GitHub"),". A simple script retrieves and parses the data into a table in DOM on page load. It is written in Typescript, hosted with the rest of my personal site here on GitHub pages, utilizes WebComponents.js as an HTML imports shim for templating and uses Bootstrap for basic formatting."),n.default.createElement("p",null,n.default.createElement("small",null,"Released: September 2016 (now retired)")))),n.default.createElement("div",{className:"row"},n.default.createElement("h4",{className:"page-header"},"SimpleScienceFix"),n.default.createElement("div",{className:"col-xs-12 col-sm-6 col-sm-push-6"},n.default.createElement("img",{className:"img-responsive img-rounded",src:u.default})),n.default.createElement("div",{className:"col-xs-12 col-sm-6 col-sm-pull-6"},n.default.createElement("p",null,"This is a small usability mod for Kerbal Space Program meant to address a minor annoyance with the way the game works. It was ",n.default.createElement("a",{href:"https://github.com/confusingbits/SimpleScienceFix"},"written in C#"),"                    and uses the Unity Game Engine and Kerbal Space Program APIs. It has been fairly well received with over",n.default.createElement("a",{href:"http://www.curse.com/ksp-mods/kerbal/230239-simplesciencefix"},"1,000 downloads")," since it's release."),n.default.createElement("h4",null,n.default.createElement("small",null,"Notable features:")),n.default.createElement("p",null,"It does a thing and it works."),n.default.createElement("h4",null,n.default.createElement("small",null,"Technical challenges:")),n.default.createElement("p",null,"None really, as I had solved most of the issues with ForScience! previously. This is a very simple user experience enhancement and I consider it feature complete. It is currently in maintenance."),n.default.createElement("p",null,n.default.createElement("small",null,"Released: May 2015")))),n.default.createElement("div",{className:"row"},n.default.createElement("h4",{className:"page-header"},"ForScience!"),n.default.createElement("div",{className:"col-xs-12 col-sm-6 col-sm-push-6"},n.default.createElement("img",{className:"img-responsive img-rounded",src:f.default})),n.default.createElement("div",{className:"col-xs-12 col-sm-6 col-sm-pull-6"},n.default.createElement("p",null,"This is mod for Kerbal Space Program. It is designed to automate some of the more tedious elements of the game play experience. It was ",n.default.createElement("a",{href:"https://github.com/confusingbits/ForScience"},"written in C#")," and uses the Unity Game Engine and Kerbal Space Program APIs."),n.default.createElement("p",null,"This was my first mod that I wrote from scratch. It has been well received with over ",n.default.createElement("a",{href:"http://www.curse.com/ksp-mods/kerbal/220264-for-science"},"25,000 downloads"),"                    since it was released. It was also ",n.default.createElement("a",{href:"http://www.pcgamer.com/the-best-kerbal-space-program-mods-2/"},"featured on PC Gamer"),'                    as one of "best Kerbal Space Program mods" and has even been forked for expanded applications by other authors.'),n.default.createElement("h4",null,n.default.createElement("small",null,"Notable features:")),n.default.createElement("p",null,"The mod detects experiments and locations, performs the available experiments when appropriate, and collects the data to the primary command pod. Having a scientist on board will make resetting run-once experiments automatic. It has purposefully uncomplicated controls, just a simple toggle icon on the tool bar."),n.default.createElement("p",null,"It is supposed to work like magic, and it does."),n.default.createElement("h4",null,n.default.createElement("small",null,"Technical challenges:")),n.default.createElement("p",null,"Implementing the business logic was made fairly complicated due to the way the API is structured (and partial documentation) as well as due to transient states in the game objects being observed. I have some possible further plans, but I consider this project to be feature complete and in maintenance."),n.default.createElement("p",null,n.default.createElement("small",null,"Released: May 2014")))),n.default.createElement("div",{className:"row"},n.default.createElement("h4",{className:"page-header"},"Interstellar Lite"),n.default.createElement("div",{className:"col-xs-12 col-sm-6 col-sm-push-6"},n.default.createElement("img",{className:"img-responsive img-rounded",src:g.default})),n.default.createElement("div",{className:"col-xs-12 col-sm-6 col-sm-pull-6"},n.default.createElement("p",null,"This is mod for Kerbal Space Program. It one of the larger types of mods that add new art and game mechanics. It is based on a previous mod called Interstellar, which had been abandoned for some time. It was",n.default.createElement("a",{href:"https://github.com/confusingbits/KSPInterstellar"},"written in C#")," and uses the Unity Game Engine and Kerbal Space Program APIs."),n.default.createElement("p",null,"This was my first mod for KSP and I used it to learn about Unity and C#, which started out as only some minor tweaks. After the original author left, I made a major overhaul of all user interactions with the mod and opened it up more user customization and allowing it to interoperate more easily with other mods. It was extremely well received, and was actually the first time I'd made money with my software. As I had hoped it soon saw many users share compatibility mods to allow it to work seamlessly with other mods for the game."),n.default.createElement("p",null,"Some splits in mod ecosystem eventually made continued support untenable and so I made the decision to support the current game version, but to retire the mod after the next major game version. Interstellar continues on in another branch by another developer, including many of my ideas, as Interstellar Continued."),n.default.createElement("h4",null,n.default.createElement("small",null,"Notable features:")),n.default.createElement("p",null,"This was a huge mod so it would be impractical to list everything. I opened up the part module attributes, which allowed players to share simple text file configurations which would allow the mod to work with various constellations of mods. It was one of the founding mods for CommunityResourcePack, which helped to create a more sane system of resources between different mods. There were many user interface and usability fixes, everything from tooltips to part behaviors. There was a massive part re-balancing to diversify part niches and expand vessel design to promote innovation and to better fit the part into the scale of the game world. There was a lot of part pruning along with the introduction of size scaling to lessen the memory footprint which was at the time limited to a 32 bit memory space. This gave users more available memory to use other mods alongside Interstellar. And there were updates to the art and code to support emissive textures and animations on radiators. And tons and tons of polish over the base Interstellar."),n.default.createElement("h4",null,n.default.createElement("small",null,"Technical challenges:")),n.default.createElement("p",null,"This was my first time working with a substantial project, and the first time working on someone else code. I had to learn the Unity/KSP APIs, which had sometimes spotty documentation. Along the way, I learned to test my code throughly because it wasn't possible to run the game in debug. In the process I learned how to use git, interact with users, process issues on GitHub, and publish and promote releases."),n.default.createElement("p",null,n.default.createElement("small",null,"Released: March 2014 (now retired)")))))};t.default=w,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-projects-js-8960e368cb40281e4722.js.map