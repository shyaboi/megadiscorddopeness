"use strict";

const Discord = require("discord.js");
const { Client, MessageAttachment } = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("bot online");
  client.channels.cache
    .find((x) => x.name === "test")
    .send("Hi y'all. Server online and ready to kill");
  const attachment = new MessageAttachment(
    "https://i.ibb.co/q0WZ7KP/download.jpg"
  );
  client.channels.cache.find((x) => x.name === "test").send(attachment);
});

client.on("message", (msg) => {
  console.log(msg);
});

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
});-

// setInterval(() => {
//     client.on('message', message => {
//         message.channel.send('Shyaboi!');
//     })
// }, 1000);
client.login(token);
