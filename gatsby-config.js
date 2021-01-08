
module.exports = {
	siteMetadata: {
		title: `DevMo's Portfolio`,
		author: `Monique Rico Cinatl`,
		description: `Monique Cinatl's developer portfolio website.`,
		url: `https://www.moniquecinatl.com`,
		image: '/favicon.ico'
	},
	pathPrefix: `/devmo-portfolio`,
  	plugins: [
		`gatsby-plugin-preload-fonts`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
            resolve: 'gatsby-plugin-tidy',
            options: {
                cleanPublic: true,
                cleanCache: true,
                removeHashes: true,
                removeArtifacts: true,
                noJsMap: true,
                jsDir: 'js',
                cssDir: 'css'
            }
        }
	]
}
