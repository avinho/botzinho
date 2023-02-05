const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('oi')
		.setDescription('Responde o cuzao que falou comigo'),
	async execute(interaction) {
		await interaction.deferReply({
			fetchReply: true,
		});

		function respostaAleatoria(resposta) {
			const indiceAleatorio = Math.floor(Math.random() * resposta.length);
			return resposta[indiceAleatorio];
		}

		const respostas = [
			`fala ${interaction.user.username}, cu de apito.`,
			`fala ${interaction.user.username}, bobo`,
			`fala ${interaction.user.username}, larapio.`,
			'fala filhote de canguru manco.',
			'Oque tu quer crlh??',
		];
		const newMessage = respostaAleatoria(respostas);
		// const newMessage = `API Latency: ${client.ws.ping}\nClient ping: ${msg.createdTimestamp - interaction.createdTimestamp}ms`;
		await interaction.editReply({
			content: newMessage,
		});
	},

};