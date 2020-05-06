"use strict";
const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");

const client = new Discord.Client();

const memeArr=['https://i.ibb.co/pfh9SRg/bff.png']

// robot
client.on("ready", () => {
  console.log("bot online");
  const embed = new MessageEmbed()
    .setImage("https://i.ibb.co/q0WZ7KP/download.jpg")
    .setTitle("RoButt Online! ( ͡° ͜ʖ ͡°)")
    .setDescription("Hi y'all. Operational and ready to kill")
    .setColor(0xff0000)
    .setAuthor('Shyaboi', "https://i.ibb.co/CsPSXmJ/ha.png", 'https://ianss.dev')

  client.channels.cache.find((x) => x.name === "general").send(embed);
});

// client.on("message", (msg) => {
//   console.log(msg);
// });

// Fs in the chat
client.on("message", (message) => {
  if (message.content == "f") {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment(
      "https://pressftopayrespects.org/img/sharetw.png"
    );
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});
client.on("message", (message) => {
  let time = Math.floor(Math.random() * 20000);
  //  a day milli                     86400000
  console.log(time)
  setInterval(() => {
    const meme = new MessageAttachment(memeArr[0]);
    // Send the attachment in the message channel
    message.channel.send(meme);
    console.log(meme)
    message.channel.send("Shyaboi!");
    console.log("msg sent");
    console.log(time);
  }, time);
});
client.login(token);
