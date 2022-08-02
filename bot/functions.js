const fs = require("fs");

module.exports = (client) => {

    fs.readdir("./handlers/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("There are no events to load...");
        jsfiles.forEach((f, i) => {
            require(`./handlers/${f}`);
     
        });
    });
}