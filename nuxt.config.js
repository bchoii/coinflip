export default {
  modules: ['@chakra-ui/nuxt', '@nuxtjs/emotion'],
  /**
   * Add extend the plugin options under the `chakra` key.
   **/
  chakra: {
    extendTheme: {
      colors: {
        brand: {
          /* ... */
        },
      },
    },
  },
};
