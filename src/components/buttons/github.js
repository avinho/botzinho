module.exports = {
	data: {
		name: 'github',
	},
	async execute(interaction) {
		await interaction.reply({
			content: 'https://github.com/avinho',
			ephemeral: true,
		});
	},
};