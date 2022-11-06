---
path: "/nextcloud"
date: "2022-11-06"
title: "Guide for connecting to my nextcloud server"
topic: "Media Server"
description: "Step by step guide for connecting to my nextcloud server."
featuredImage: ../images/nextcloud/nextcloud.png
posttype: "blog"
tags: [reference, faq, media-server]
---

Want access to my media server? You're in the right place. I'm not streaming it over Plex anymore because the GPU usage spiked my energy bill, but you can still connect to the server and download the Movies and TV shows I have, no problem! I'm running a Nextcloud server, so if you set up the client it acts similarly to dropbox for you. Then you can set up a Plex server for yourself to play things at home!

## Install Nextcloud client
Install nextcloud client on the device on which you plan to store the files (I recommend you main PC). You can hook up an external harddrive to this device for more storage. https://nextcloud.com/clients/


## Connect you Nextcloud client to my server
Connect your nextcloud client to my server by pointing it to https://share.kyleleslie.dev

## Get login credentials
Text me (preferably over Signal but it's not a big deal) to get your username and password. Using these, you can connect your client to my server.
- You can change your username once your account is setup if you want to.

## Tweak you Nextcloud settings
- Make sure to choose a selective sync (don't try and sync everything available on the server). I'll include screenshots here later, but essentially just choose the shows and movies you want.
- Recommended: Turn off the setting that requires confirmation for connecting to external storage and increadse the file-size limit for downloads. Most files are close to 1GB or larger

Congratulations! You have connected to my server and are downloading the files! 

**If you'd like an easy way to play the files on your TV, you can follow these additional steps**
## Install Plex Server and Plex Client
- Install Plex Media Server to act as your own media server for the files you've downloaded: https://www.plex.tv/media-server-downloads/
- When setting it up, point the Movies and TV folders to the download destination for Nextcloud
- Install Plex client on whichever device you are streaming to, or on your phone: https://www.plex.tv/media-server-downloads/#plex-app
- Now you'll be able to use the app to control playback from your server just like you would Netflix

## Tweak Plex settings
Make sure these settings are enabled in Plex via Settings > Library (show advanced)
-  Scan my library automatically:Your library will be updated automatically when changes to library folders are detected.
- Run a partial scan when changes are detected: When changes to library folders are detected, only scan the folder that changed.
- Scan my library periodically:Library scan interval:hourly


Congratulations, you now have a personal media server running!

**If you'd like the ability to add movies or tv shows to the server via the request system, follow the additional steps below.**

## Send me your Plex username
Text me your plex username so I can add you to the request app.

## Add Movies or TV shows to the server
Log into https://request.kyleleslie.dev/ with you Plex credentials and request Movies or TV Shows.
- Recommended: If you don't have a way to transcode your files and don't have a higher end streaming receiver, selected "Easier to Cast" for the quality profile. If you're not sure, ask me or go with "Easier to Cast" just to be safe.
- Let me know once you've watched whatever you download so I can delete it afterwards to save space on the server.


**There you go, now you're all set! Enjoy!**

## Troubleshooting
Common bugs or issues I've run into over time:
- T**he movie I downloaded is bufferring and freezing when I try to chromecast it via plex or other:** The movie is likely in a file-format that your chromecast/ receiving device doesn't support and the media file requires [transcoding](https://docs.videolan.me/vlc-user/3.0/en/advanced/transcode/transcode_introduction.html). This can be solved in 3 ways. **1:** get a higher end device to receive the stream that will accept for file-wrappers natively (ex. NVidia Shield). This is what most people with their own media server do. **2:** Enable hardware transcoding in plex by paying for plex pass (or for free using Jellyfin) and utilize a GPU on your host machine to transcode. **3:** Ask Kyle to redownload the media with an easier to cast file-format (will probably be lower quality).
- **Nextcloud downloads more content than the movies or tv you selected:** No idea why this happens. I'm looking into this bug with Nextcloud
- **Nextcloud can't connect to the server?!:** My server is probably offline. If my internet goes down I have to update a setting with the dynamic DNS host.
- **The file has been downloaded by Nextcloud, but isn't showing up in Plex:** You may need to tweak your plex settings to scan more often..

#### Useful links
- https://share.kyleleslie.dev
- https://request.kyleleslie.dev
