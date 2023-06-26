module.exports = {
  testEnvironment: "jest-environment-jsdom",
  //   setupFiles: ["fake-indexeddb/auto"],
  setupFilesAfterEnv: ["./setupTests.ts"],
  // moduleNameMapper: {
  //   '^dexie$': require.resolve('dexie'),
  //   '\\.css$': require.resolve('./src/test/style-mock.ts'),
  //   '\\.scss$': require.resolve('./src/test/style-mock.ts'),
  //   '\\.svg$': require.resolve('./src/mocks/svg.js'),
  //   '^@mui/styled-engine$': require.resolve('@mui/styled-engine-sc'),
  // },
  collectCoverageFrom: [
    "**/src/**/*.ts(x)?",
    "!**/vendor/**",
    "!**/*.test",
    "!**/src/test/**",
  ],
};
