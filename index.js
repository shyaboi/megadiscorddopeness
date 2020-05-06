"use strict";
const token = "NzA3NDUwMTk3NDQxMjQ5MzAy.XrJEjQ.P1tAR3ICq0NLvLlbcfEgn2Kcn9A";
const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");

const client = new Discord.Client();

// robot
client.on("ready", () => {
  console.log("bot online");
  const embed = new MessageEmbed()
    .setImage("https://i.ibb.co/q0WZ7KP/download.jpg")
    .setTitle("RoButt Online! ( ͡° ͜ʖ ͡°)")
    .setDescription("Hi y'all. Operational and ready to kill")
    .setColor(0xff0000);
  client.channels.cache.find((x) => x.name === "test").send(embed);
});

// client.on("message", (msg) => {
//   console.log(msg);
// });

// Fs in the chat
client.on("message", (message) => {
  if (message.content === "f") {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment(
      "https://pressftopayrespects.org/img/sharetw.png"
    );
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});
-client.on("message", (message) => {
   let time = Math.floor(Math.random()* 10000);
    //   once a day milli 86400000
  setInterval(() => {
    message.channel.send("Shyaboi!");
    console.log('msg sent')
    console.log(time)
  }, time)
});
client.login(token);
