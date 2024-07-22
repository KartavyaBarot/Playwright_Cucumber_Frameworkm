// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  //retries: 1,
  workers: 2,

  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },


  projects: [
  
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on',
      },
    },
  ],
});
