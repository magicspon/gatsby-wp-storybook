const { plugins } = require('./postcss.config')

module.exports = {
	siteMetadata: {
		title: `spon.io`,
		author: `Dave Stockley`,
		description: `Freelance Frontend Web Developer based in Bristol, UK. React, Gatsby, Javascript, CSS, Craftcms`,
		siteUrl: `https://spon.io/`,
		social: {
			twitter: `magicspon`
		}
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `uploads`,
				path: `${__dirname}/static/img`
			}
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: plugins
			}
		},

		/*
		 * Gatsby's data processing layer begins with “source”
		 * plugins. Here the site sources its data from Wordpress.
		 */

		{
			resolve: `gatsby-source-wordpress`,
			options: {
				/*
				 * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
				 * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
				 */
				baseUrl: `domain.test`,
				// The protocol. This can be http or https.
				protocol: `http`,
				// Indicates whether the site is hosted on wordpress.com.
				// If false, then the asumption is made that the site is self hosted.
				// If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
				// If your site is hosted on wordpress.org, then set this to false.
				hostingWPCOM: false,
				// If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
				// This feature is untested for sites hosted on Wordpress.com
				useACF: true
			}
		},

		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
			}
		},

		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Spon | Frontend Developer`,
		// 		short_name: `spon.io`,
		// 		start_url: `/`,
		// 		background_color: `#ffffff`,
		// 		theme_color: `#141C39`,
		// 		display: `minimal-ui`,
		// 		icon: `content/assets/gatsby-icon.png`
		// 	}
		// },
		// `gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`
	]
}
