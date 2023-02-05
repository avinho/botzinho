const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('links')
		.setDescription('Retorna um butão'),
	async execute(interaction) {
		const buttonGithub = new ButtonBuilder()
			.setLabel('Github')
			.setURL('https://github.com/avinho')
			.setStyle(ButtonStyle.Link);

		const buttonTwitter = new ButtonBuilder()
			.setLabel('Twitter')
			.setURL('https://twitter.com/aviinho')
			.setStyle(ButtonStyle.Link);

		const buttonSteam = new ButtonBuilder()
			.setLabel('Steam')
			.setURL('https://steamcommunity.com/profiles/76561198180329569/')
			.setStyle(ButtonStyle.Link);

		const buttonTwitch = new ButtonBuilder()
			.setLabel('Twitch')
			.setURL('https://www.twitch.tv/avinho')
			.setStyle(ButtonStyle.Link);

		await interaction.reply({
			components: [new ActionRowBuilder().addComponents(buttonGithub).addComponents(buttonTwitter), new ActionRowBuilder().addComponents(buttonSteam).addComponents(buttonTwitch)],
		});
	},
};