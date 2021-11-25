module.exports = {
  name: 'ready',
  execute(client) {
    console.log('Ticket Bot ready!')
    console.log('De bot is aan! ❤️  by Raiyah');
    const oniChan = client.channels.cache.get(client.config.ticketChannel)

    function sendTicketMSG() {
      const embed = new client.discord.MessageEmbed()
        .setColor('7F00FF')
        .setAuthor('Ticket Tool - Faith', client.user.avatarURL())
        .setDescription(':safety_vest: **Adventage - Support** :safety_vest:\n\nIf you have any **questions** or other related problems.\nPlease consider to make a **ticket**\nso we can help you to solve your **problem!**')
        .setFooter(client.config.footerText, client.user.avatarURL())
      
        const row = new client.discord.MessageActionRow()
        .addComponents(
          new client.discord.MessageButton()
          .setCustomId('open-ticket')
          .setLabel('')
          .setEmoji('✉️')
          .setStyle('PRIMARY'),
        );

      oniChan.send({
        embeds: [embed],
        components: [row]
      })
    }

    oniChan.bulkDelete(100).then(() => {
      sendTicketMSG()
    })
  },
};