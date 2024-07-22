// // @ts-check
// const { defineConfig, devices } = require('@playwright/test');

// module.exports = defineConfig({
//   testDir: './tests',
//   retries: 0,
//   workers: 0,

//   timeout: 30 * 1000,
//   expect: {
//     timeout: 5000,
//   },

//   reporter: 'html',

//   use: {
//     trace: 'on-first-retry',
//   },


//   projects: [
//     {
//       name: 'safari',
//       use: {
//         browserName: 'webkit',
//         headless: true,
//         screenshot: 'off',
//         trace: 'on',
//         // ...devices['iPhone 14 Pro Max'],
//       },
//     },
    
//     {
//       name: 'Chrome',
//       use: {
//         browserName: 'chromium',
//         headless: false,
//         screenshot: 'only-on-failure',
//         video: 'on-first-retry',
//         trace: 'on',
//         // ignoreHTTPSErrors: true,
//         // permissions: ['geolocation'], // handles location or camera/mic permissions pop-up
//         // viewport: { width: 750, height: 768 },
//         // ...devices['Galaxy Tab S4 landscape']
//       },
//     },
//     // {
//     //   name: 'chromium',
//     //   use: { ...devices['Desktop Chrome'] },
//     // },
//   ],
// });
