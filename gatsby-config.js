
module.exports = {
	siteMetadata: {
		title: `Monique's Portfolio`
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
		}
	]
}
