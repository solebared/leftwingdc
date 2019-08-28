// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Left Wing DC',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ContentPage',
        path: 'content/pages/*.md',
        route: '/:slug',
      },
    },
    {
      use: 'gridsome-plugin-netlify-cms',
    },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['ContentPage'],
        coverField: 'image',
      },
    },
  ],
}
