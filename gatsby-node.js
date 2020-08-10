
// Creates pages for each project based on the projects data in the json file.
const json = require('./src/data/projects.json');

exports.createPages = ({ actions }) => {
	const { createPage } = actions;

	json.projects.forEach(project => {
		createPage({
			path: `/project-details/${project.id}`,
			component: require.resolve(`./src/components/details.js`),
			context: { project },
		})
	});
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
	if (stage.startsWith('develop')) {
		actions.setWebpackConfig({
			resolve: {
				alias: {
				'react-dom': '@hot-loader/react-dom',
				},
			},
		})
	}
}
