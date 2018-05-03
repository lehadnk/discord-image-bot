"use strict";
const Discord = require("discord.js");
const client = new Discord.Client();

const StaticImageRepository = require("./src/StaticImageRepository");
const GoogleImageRepository = require("./src/GoogleImageRepository");
const ImageRepositoryStack = require("./src/ImageRepositoryStack");

const repositoryStack = new ImageRepositoryStack();
repositoryStack.addRepository(new GoogleImageRepository(process.env.GOOGLE_SEARCH_ID, process.env.GOOGLE_APP_TOKEN));
repositoryStack.addRepository(new StaticImageRepository);

const Mappings = {
    "!шпэльфийка": "shadow priest elf female",
    "!шпдренейка": "shadow priest draenei female",
    "!девочкаприст": "priest female",
    "!мальчикприст": "priest male",
    "!тролляша": "troll",
    "!рандомарт": "",
    "!дренеечка": "draenei female"
}

function sendImage(channel, imgUrl) {
    let embed = new Discord.RichEmbed()
        .setImage(imgUrl);
    channel.send({embed});
}

client.on('message', msg => {
    let command = msg.content;

    if (!Mappings.hasOwnProperty(command)) {
        return;
    }

    repositoryStack.getRandomImageByTag(Mappings[command])
        .then(url => {
            sendImage(msg.channel, url);
        })
        .catch(ex => {
            if (ex.showToUser()) {
                msg.channel.send(ex.getMessage());
            }
        });
});

client.login(process.env.BOT_TOKEN);