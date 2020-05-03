const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const slug = require('slug');

exports.createPages = async ({ actions: { createPage } }) => {
	const games = JSON.parse(
		await readFile('./src/data/games.json', {
			encoding: 'UTF-8',
		})
	).map((game) => ({ ...game, id: slug(game.title, { mode: 'rfc3986' }) }));

	createPage({
		path: `/makecode`,
		component: require.resolve('./src/templates/games-list.jsx'),
		context: { games },
	});

	games.forEach((game) => {
		createPage({
			path: `/makecode/${game.id}`,
			component: require.resolve('./src/templates/game.jsx'),
			context: { game },
		});
	});
};
