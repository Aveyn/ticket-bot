const {
    SlashCommandBuilder
  } = require('@discordjs/builders');
  const { Routes } = require('discord-api-types/v9');
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName('koth')
      .setDescription('KoTH Message'),
    async execute(interaction, client) {
      const embed = new client.discord.MessageEmbed()
        .setColor('7F00FF')
        .setDescription('**KOTH - Tonight**\n\nAre you going to join us on **KoTH**?\nMake sure to interact on the emojis!\nSo we can see if you are available!\n\n:white_check_mark: = I am available!\n:x: = I am NOT available! ')
        .setFooter(client.config.footerText, client.user.avatarURL())
        .setTimestamp();
  
      await interaction.reply({
        embeds: [embed]
      });
    },
  };