
module.exports = {
	siteMetadata: {
		title: `Monique's Portfolio`,
		author: `Monique Rico Cinatl`,
		url: `https://www.moniquecinatl.com`,
	},
  	plugins: [
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
