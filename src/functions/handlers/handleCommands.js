const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => {
	client.handleCommands = async () => {
		const commandFolders = fs.readdirSync('./src/commands');
		for (const folder of commandFolders) {
			const commandFiles = fs.readdirSync(`./src/commands/${folder}`)
				.filter((file) => file.endsWith('.js'));


			const { commands, commandArray } = client;
			for (const file of commandFiles) {
				const command = require(`../../commands/${folder}/${file}`);
				commands.set(command.data.name, command);
				commandArray.push(command.data.toJSON());
			}
		}

		const clientId = '1070554468728459346';
		const guildId = '665222849388216331';
		const rest = new REST({ version: '9' }).setToken(process.env.token);
		try {
			console.log('Iniciando a atualização dos comandos (/) do aplicativo.');

			await rest.put(Routes.applicationGuildCommands(clientId, guildId),
				// eslint-disable-next-line no-undef
				{ body: client.commandArray },
			);

			console.log('Comandos (/) do aplicativo recarregados com sucesso.');
		}
		catch (error) {
			console.error(error);
		}
	};
};