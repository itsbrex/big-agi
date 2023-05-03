/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md             all over
 *  - package.json          app-slug and version
 *  - public/manifest.json  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  // Name: 'big-AGI',
  // UpperName: 'BIG-AGI',
  Title: {
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'big-AGI',
  },
  Meta: {
    SiteName: 'brex-AGI',
    Title: 'brex-AGI: Personal AGI App',
    Description: 'brex-AGI is a free, open-source project to build a general artificial intelligence (AGI) that can solve any problem.',
    Keywords: 'artificial general intelligence, agi, openai, gpt-4, ai personas, code execution, pdf import, voice i/o, ai chat, artificial intelligence',
    ThemeColor: '#434356',
    TwitterSite: '@bigagienergy',
  },
  URIs: {
    // Slug: 'brex-AGI',
    Home: 'https://agi-chat.itsbrex.dev',
    CardImage: 'https://big-AGI.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/itsbrex/big-AGI',
    SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
  },
};