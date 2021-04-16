// config for all the things
const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://polkacast.network',
    gaTrackingId: null
  },
  header: {
    logo: 'https://gateway.pinata.cloud/ipfs/QmNZAzmeg6651cEqyorrduKLzSgEb4Aoc71EZiaaKMabkW/polkacast-256.png',
    logoLink: '/',
    title: 'Polkacast',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    links: [
      { text: 'Protocols', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Careers', link: '/jobs' },
      { text: 'Contact', link: '/contact' }
    ],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    // modified from original config, this is now only for ordering top-level groups
    forcedNavOrder: [
      'getting-started',
      'dataset-components',
      'working-with-datasets',
      'integrating-qri',
      'reference'
    ],
    links: [
      // { "text": "", "link": ""},
    ],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: 'polkacast.network',
    description: 'polkacast Website and Documentation',
    ogImage: null,
    docsLocation: 'https://github.com/polkacast',
    favicon: ''
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  }
}

module.exports = config
