module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (interaction.isChatInputCommand()) {
			const { commands } = client;
			const { commandName } = interaction;
			const command = commands.get(commandName);

			if (!command) return;

			try {
				await command.execute(interaction, client);
			}
			catch (error) {
				console.error(error);
				await interaction.reply({
					content: 'Ocorreu um erro ao tentar executar este comando!',
					ephemeral: true,
				});
			}
		}
		else if (interaction.isButton()) {
			const { buttons } = client;
			const { customId } = interaction;
			const button = buttons.get(customId);

			if (!button) return;

			try {
				await button.execute(interaction, client);
			}
			catch (error) {
				console.error(error);
				await interaction.reply({
					content: 'Ocorreu um erro ao tentar executar este botão!',
					ephemeral: true,
				});
			}
		}
	},
};