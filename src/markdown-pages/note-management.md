---
path: "/note-management"
date: "2020-07-17"
title: "My Note-Management Solution"
topic: "Note Management"
description: "How I manage my notes/ my knowledge-base and keep it all synced, backed-up and (mostly) open-source!"
featuredImage: ../images/note-management/note-management.png
posttype: "blog"
tags: [reference, recommendations, workflow]
---

Since beginning to work from home as a developer, I've wanted a clean, efficient, and reliable way to syncronize my notes and files without relying on specific companies or services (such as dropbox, evernote, or google drive/docs). This proved to be a little harder than I expected. Getting perfect syncronization across macOS, windows, linux and android was difficult, and staying away from 3rd-party syncing services was also a pain. I knew I wanted to keep my notes in a markdown format so I started doing some research and found a few useful forum threads that helped me out. Below is a solution that solves 90% of my use-case. The last piece of my puzzle is managing my ToDo list which currently is still best managed via Evernote for me. 



### Things that are important to me:
> - Open-source and no vendor lock-in (so if a company dies it doesn't mess me up)  
> - Cross-platform (Mac, windows, linux)  
> - Automatic syncing  
> - Search  
> - Legible and styled (so Markdown)  
> - Zettelkasten (linking and citing between notes) method built in   
> - Export as pdfs or .docx files  
> - Dark-mode  
> - Very feature rich (tons of customization and nice-to have features)  

### Contents of this page:
- [Desktop Editor (Zettlr)](#desktop-editor)
- [Mobile Editor (Markor)](#mobile-editor)
- [Syncing (Syncthing)](#syncing)
- [Backup (Git + gitwatch + Automator)](#backup)
- [Useful Links](#useful-links)


### Desktop Editor
**[Zettlr](https://www.zettlr.com/)**
(insert picture)
  
Lightweight feature-rich app with search + tons of customization that won't mess me up if it disappears tomorrow. I can also edit markdown files straight from directory with other applications (like VSCode) if necessary. 

**Pros:**  
✅ Open-source and no vendor lock-in (so if their company dies it doesn't mess me up)  
✅ Cross-platform (Mac, windows, linux)  
✅ Search  
✅ Legible and styled (so Markdown)  
✅ Zettelkasten (linking and citing between notes) method built in   
✅ Export as pdfs or .docx files  
✅ Dark-mode  
✅ Very feature rich (tons of customization and nice-to have features)

**Cons:**  
- No syncing built in (I've added it)
- No mobile app
- Tough to manage Todo lists


### Mobile Editor
**[Markor](https://gsantner.net/project/markor.html)**
(insert picture)

### Syncing: [Syncthing](https://syncthing.net/)
(insert image of syncthing)

Simple open-source syncing tool that securely and quickly shared folders between configured machines via P2P. 

**Pros:**
✅ Cross-platform (all computers and phone)
✅ Open source
✅ Secure
✅ P2P (between my devices)
✅ Fast
✅ Bi-directional
✅ Lightweight

**Cons:**
- Sometimes difficult to untangle syncing errors
- Takes a little bit of setting up

### Backup 
**Git + [Gitwatch](https://github.com/gitwatch/gitwatch) + Automator**
Using git for backup storage/ versioning. Using [gitwatch](https://github.com/gitwatch/gitwatch) for monitoring and automatic committing.  Using automator to run a bash script on startup that initializes gitwatch (on my mac).

**Pros:**  
✅ Open source (not tied to Zettlr)
✅ Automatic with gitwatch running to monitor changes

**Cons:**  

**Script to start gitwatch on boot and kill ScriptMonitor (to make it lightweight)**
```
#!/bin/bash
export PATH=/usr/local/bin:$PATH

# start gitwatch on notes/ for automatic commit on change + kill scriptmonitor after 1 min

gitwatch -r origin /Users/Kyle/git/notes/ & sleep 60; killall ScriptMonitor

```


#### Useful links
> -  automatically starting gitwatch on boot [https://medium.com/@fahimhossain_16989/adding-startup-scripts-to-launch-daemon-on-mac-os-x-sierra-10-12-6-7e0318c74de1](https://medium.com/@fahimhossain_16989/adding-startup-scripts-to-launch-daemon-on-mac-os-x-sierra-10-12-6-7e0318c74de1)
>- [Hacker News discussion on Zettlr](https://news.ycombinator.com/item?id=23723775)
>- Syncthing


