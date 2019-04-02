const discord = require('discord-rich-presence')('CLIENT_ID_HERE');
let starttime = Date.now();
let details = ["DETAILS", "MORE DETAILS", "ETC"];
console.log("Started!")
discord.updatePresence({
        details: details[Math.round(Math.random() * (details.length - 1))],
        startTimestamp: starttime,
        largeImageKey: "KEY_HERE",
        smallImageKey: "KEY_HERE",
        largeImageText: "TEXT HERE",
        smallImageText: "TEXT HERE",
        instance: true
})        
setInterval(() => discord.updatePresence({
        details: details[Math.round(Math.random() * (details.length - 1))],
        startTimestamp: starttime,
        largeImageKey: "KEY_HERE",
        smallImageKey: "KEY_HERE",
        largeImageText: "TEXT HERE",
        smallImageText: "TEXT HERE",
        instance: true
