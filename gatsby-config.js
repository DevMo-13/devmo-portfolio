
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
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
				{
					family: `Poppins`,
					variants: [`400`, `Semi-bold 600`, `Bold 700`]
				},
				{
					family: `Questrial`
				},
				],
			}
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`
			}
		},
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
