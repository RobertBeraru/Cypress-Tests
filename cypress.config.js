const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9opyd7",
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  requestTimeout: 15000,
  e2e: {
    setupNodeEvents(on, config) {
  
    },
  },
});
