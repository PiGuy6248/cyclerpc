# rpc
Easy Custom Rich Presence for Discord

This is a basic rpc script for Discord. It will work automatically with a discord window currently open. **Not compatible with discordapp.com(browser) or mobile.**

## Guide for Noobs:
(Note this is based on Windows)

**Make sure you have [Node.js/NPM](https://nodejs.org/dist/v10.15.3/node-v10.15.3-x64.msi)**
1. Clone the repository (big green button)
2. Go to the [Discord Dev page](https://discordapp.com/developers/applications) and create a new application.
3. Click on "Rich Presence" on the side and click Add Image(s). add the image(s) you want to use here.
4. go back to the General Information page and copy the client id. You'll need this later.
5. (back in the rpc folder) Right click the rpc.js file and click edit, or open it in another text editor, such as VSC or Atom.
6. All of the things that need replacing are in CAPS. See the table below for what they mean.
7. Once you've completed all of the editing, save and exit.
8. right click in blank space in the folder, and click Open Powershell Window
9. run `npm init`
10. run `npm install discord-rich-presence`
11. Exit the command window, and open the start.cmd file. Congratulations, your rpc should now be running!

## Variable List

|Name|Usage|Optional?|
|CLIENT_ID_HERE|Put the client ID of the application, found on the Discord Dev Application site|no|
|DETAILS/MORE DETAILS/ETC|Put each of your selective details here. Follow the format given.|Don't you want to have text?|
|largeImageKey|Key for the large image of your rpc (set on the application page)|no|
|smallImageKey|Key for the small image of your rpc (set on the application page)|YES|
|largeImageText|Text displayed when hovering over the large image.|YES|
|smallImageText|Text displayed when hovering over the small image.|YES|
|state|(Not used in this portion)Text under the details line|YES|


### Visual Reference:
https://pi.elixi.re/i/npan.png
