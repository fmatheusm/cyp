const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev-finance.netlify.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});