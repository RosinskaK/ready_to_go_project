import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',  
  },
});



//https://docs.cypress.io/guides/end-to-end-testing/testing-your-app - ustawinie domyślnego baseUrl