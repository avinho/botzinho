const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Retorna um embed'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setTitle('🔗 Github')
			.setDescription('Meu GitHub')
			.setColor(0x18e1ee)
			.setTimestamp(Date.now())
			.setAuthor({
				name: interaction.user.username,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setFields()
			.setURL('https://github.com/avinho')
			.addFields([
				{
					name: 'Teste 1',
					value: 'Teste 1',
					inline: true,
				},
				{
					name: 'Teste 2',
					value: 'Teste 2',
					inline: true,
				},
			])
			.setFooter({
				text: interaction.user.username,
			});

		await interaction.reply({
			embeds: [embed],
		});
	},
};