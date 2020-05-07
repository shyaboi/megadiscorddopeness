"use strict";
const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");

const client = new Discord.Client();

const memeArr = [
  "https://i.ibb.co/pfh9SRg/bff.png",
  "https://i.ibb.co/vc30d1s/bff.jpg",
  "https://i.imgur.com/89jfxEu.mp4",
  "https://i.imgur.com/mym8W7P.mp4",
  "https://i.imgur.com/iu26fmp.mp4",
  "https://i.imgur.com/jZ3Z8Xf.mp4",
  "https://i.imgur.com/HXxhGbV.jpg",
  // "https://media.tenor.com/images/d278a15d331dc8636a6ebc993f32c980/tenor.gif",
  // "https://media.tenor.com/images/b49c72431317ddc9c62be6a050f58ce6/tenor.gif",
  // "https://media1.tenor.com/images/1a5021213be840891745e2c272eec312/tenor.gif?itemid=4759702.gif",
  // "https://tenor.com/view/roasted-your-mom-ha-roast-gotcha-gif-14674144.gif",
  // "https://tenor.com/view/your-mom-mother-mom-50cent-50central-gif-10547237.gif"
];

// robot init
client.on("ready", () => {
  console.log("bot online");
  const embed = new MessageEmbed()
    .setImage("https://i.ibb.co/q0WZ7KP/download.jpg")
    .setTitle("RoButt Online! ( ͡° ͜ʖ ͡°)")
    .setDescription("Hi y'all. Operational and ready to kill")
    .setColor(0xff0000)
    .setAuthor(
      "Shyaboi",
      "https://i.ibb.co/CsPSXmJ/ha.png",
      "https://ianss.dev"
    );

  client.channels.cache.find((x) => x.name === "general").send(embed);
});

// client.on("message", (msg) => {
//   console.log(msg);
// });
client.on("guildMemberAvailable", () => {
  const channel = member.guild.channels.cache.find((ch) => ch.name === "test");
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

// Fs in the chat
client.on("message", (message) => {
  const attachment = new MessageAttachment(
    "https://pressftopayrespects.org/img/sharetw.png"
  );
  if (message.content == "f") {
    // Create the attachment using MessageAttachment
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
  if (message.content == "F") {
    message.channel.send(attachment);
  }
  if (message.content == "Fs in the chat") {
    message.channel.send(attachment);
  }
  if (message.content == "eFs in the chat") {
    message.channel.send(attachment);
  }
  if (message.content == "fs in the chat") {
    message.channel.send(attachment);
  }
  if (message.content == "efs in the chat") {
    message.channel.send(attachment);
  }
  if (message.content == "eeFs in the chat") {
    message.channel.send(attachment);
  }
  if (message.content == "fic") {
    message.channel.send(attachment);
  }
  if (message.content == "Efs") {
    message.channel.send(attachment);
  }
  if (message.content == "eFs") {
    message.channel.send(attachment);
  }
  if (message.content == "efs") {
    message.channel.send(attachment);
  }
});
client.on("message", (message) => {
  const memeTime = setInterval(() => {
    const memeR = memeArr[Math.floor(Math.random() * memeArr.length)];

    const meme = new MessageAttachment(memeR);
    // Send the attachment in the message channel
    console.log(meme);
    message.channel.send("Shyaboi!");
    message.channel.send(meme);
    console.log("msg sent");
    clearInterval(memeTime)

  }, 5000);
  // let time = Math.random() * 20000;
  //  a day milli                     86400000
  // console.log(time);
  memeTime;

  // console.log(time);
});


client.login(token);
