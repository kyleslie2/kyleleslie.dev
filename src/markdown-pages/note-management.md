---
path: "/note-management"
date: "2020-07-17"
title: "My Note-Management Solution"
topic: "Note Management"
description: "How I manage my notes/ my knowledge-base and keep it all synced, backed-up and (mostly) open-source!"
featuredImage: ../images/note-management/note-management.png
posttype: "blog"
tags: [technology, personal, links, recommendations, workflow]
---
**Note:**_This post is incomplete_

### Things that are important to me:
- Open-source and no vendor lock-in (so if a company dies it doesn't mess me up)
- Search
- Ledgible and styled (so Markdown)
- Automatic syncing
- Cross platform (mac, windows, linux, android)
- Nice to have: todos/ reminders (using evernote for this right now)

### Desktop Editor:  [Zettlr](https://www.zettlr.com/)
✅ Open-source and no vendor lock-in (so if their company dies it doesn't mess me up)
✅ Cross-platform (Mac, windows, linux)  
✅ Search  
✅ Ledgible and styled (so Markdown)  
✅ Zettelkasten method buit in (linking and citing between notes)  
✅ Export as pdfs or .docx files  
✅ Dark-mode  
✅ Very feature rich (tons of customization and nice-to have features)  

Can edit .md files straight from directory with other applications (like VSCode). Lightweight feature-rich app with search + tons of customization that won't mess me up if it disappears tomorrow.

### Mobile Editor: [Markor](https://gsantner.net/project/markor.html)
(insert picture)

### Syncing: [Syncthing](https://syncthing.net/)
(insert image of syncthing)
Advantages of syncthing:
- Cross-platform (all computers and phone)
- Open source
- Secure
- P2P (between my devices)
- Fast
- Bi-directional
- Lightweight

### Backup: Git + [Gitwatch](https://github.com/gitwatch/gitwatch) + Automator
- [x] Open source (not tied to Zettlr)
- [x] Automatic with gitwatch running to monitor changes

Using git for backup storage/ versioning. Using [gitwatch](https://github.com/gitwatch/gitwatch) for monitoring and automatic committing.  Using automator to run a bash script on startup that initializes gitwatch (on my mac).

**Script to start gitwatch on boot and kill ScriptMonitor (to make it lightweight)**
```
#!/bin/bash
export PATH=/usr/local/bin:$PATH

# start gitwatch on notes/ for automatic commit on change + kill scriptmonitor after 1 min

gitwatch -r origin /Users/Kyle/git/notes/ & sleep 60; killall ScriptMonitor

```


#### Useful links:
> -  automatically starting gitwatch on boot [https://medium.com/@fahimhossain_16989/adding-startup-scripts-to-launch-daemon-on-mac-os-x-sierra-10-12-6-7e0318c74de1](https://medium.com/@fahimhossain_16989/adding-startup-scripts-to-launch-daemon-on-mac-os-x-sierra-10-12-6-7e0318c74de1)
>- [Hacker News discussion on Zettlr](https://news.ycombinator.com/item?id=23723775)



