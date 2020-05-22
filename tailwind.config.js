/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        greyish: '#f4f5f9',
        'mashi-grey': '#444A51',
        'mashi-pink': '#EB7B94',
        'mashi-violet': '#AC87B8',
        'vue-green': '#42B181'
      },
      textColor: {
        greyish: '#f4f5f9',
        'mashi-grey': '#444A51',
        'mashi-pink': '#EB7B94',
        'mashi-violet': '#AC87B8',
        'vue-green': '#42B181'
      },
      borderStyle: {
        greyish: '#f4f5f9',
        'mashi-grey': '#444A51',
        'mashi-pink': '#EB7B94',
        'mashi-violet': '#AC87B8',
        'vue-green': '#42B181'
      },
      fontFamily: {
        sans: ['Inter var','system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue'],
        mono: ['Blokletters Balpen'],
        display: ['Blokletters Viltstift']
      },
      boxShadow: {
        pink: '0 0 0 3px rgba(235, 123, 148, 0.5)',
      }
    }
  },
  variants: { fontFamily: ['responsive', 'hover', 'focus'], boxShadow: ['responsive', 'hover', 'focus'] },
  plugins: []
}
