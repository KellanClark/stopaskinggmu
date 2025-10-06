# StopAskingGMU
Hey, GMU students! Are you tired of constantly clicking buttons that never remember your choices? Well not any more! This little extension automates all the little things that annoy me, and I hope it can help you too. The code is open-source and doesn't send any data over the internet, so you can verify for yourself that it's completely safe.

[Install in Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/stopaskinggmu/memjepmledaojhndmlkcjopkikmlokpb)

[Install in Firefox](https://addons.mozilla.org/en-US/firefox/addon/stopaskinggmu/)

###### (There are no plans to put this on the Chrome store because of the registration fee. Please see the manual installation instructions below.)

## Features
- A settings UI that lets you enable, disable, and configure every feature
- Automatically select an option on the Information Release page
- Skip the Information Release page page entirely
- Skip the page with the big "Log Into Canvas" button
- Automatically re-login to Outlook when it's been too long and the red warning appears
- Skip the Duo "Is this your device?" prompt

## Manual Installation
### Chrome/Edge
1. Extract the folder somewhere
2. Go to `chrome://extensions/` or `edge://extensions/` in your browser
3. Enable the litte developer mode switch
4. Click the new "Load unpacked" button
5. Select the extension's folder

### Firefox
At the moment, I do not know if there is a way to properly install extensions in Firefox unless you have the developer version. The following instructions will install this as a temporary extension, meaning you need to repeat the steps every time you restart the browser.
1. Download the `.xpi` file from Releases
2. Go to `about:debugging#/runtime/this-firefox` in your browser
3. Click "Load Temporary Add-on..."
4. Select the extension's ZIP file
5. (optional) Go to `about:addons`, click on the extension's settings, and allow it to run in private mode
