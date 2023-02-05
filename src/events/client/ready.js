module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`O ${client.user.tag} está online!`);
	},
};