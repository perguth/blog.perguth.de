---
pubDatetime: 2024-10-12
title: Testing IDX
featured: false
draft: false
tags:
  - IDX
  - IDE
---
I've been testing out Google's [Hashtag#IDX](https://www.linkedin.com/feed/hashtag/?keywords=idx&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7251094304956301313), and overall, I like it. It's great to just spin up a repo and start working without too much hassle. The AI integration is a nice touch too. I've had a few situations where Gemini solved things that OpenAI couldn’t.  
  
I also put together a starter template using Vite, TS, TRPC and TanStack Router: [https://github.com/thingylabs/idx-starter-vite-ts-trpc-tanstack-router](https://github.com/thingylabs/idx-starter-vite-ts-trpc-tanstack-router)[  
  
But](https://lnkd.in/gi5eXhxz￼￼But) as the projects started growing, I noticed the workspace slowing down a bit. Unfortunately, there’s no way to add more CPU power, which is a bit of a limitation.  
  
The workspace setup using a .nix definition file is pretty neat. There are a few quirks, like the console tab randomly disappearing. A helpful hint is to use CTRL + P and run "onStart tasks" to bring it back when needed.  
  
As a ChromeOS user\*, this setup really suits my workflow. I rarely spin up my local Linux instance anymore, which used to be my go-to for everything. I even had a one-paste setup script ([https://github.com/perguth/chromeos-developer-setup](https://github.com/perguth/chromeos-developer-setup)). Now, I mostly just SSH into the remote machines I maintain and do everything else with IDX.  
  
What are your thoughts on the UI based "cloud-native development"? Ever tried?  
  
\*: [https://www.linkedin.com/posts/perguth\_chromeos-activity-7161679472285396992-6fO7/](https://www.linkedin.com/posts/perguth_chromeos-activity-7161679472285396992-6fO7/)