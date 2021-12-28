module.exports = {
  // https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-unit-jest/presets/default/jest-preset.js
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  testMatch: ['**/tests/unit/**/*.(spec|test).[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  /** ********** Modules Settings **********/
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts', 'vue', 'tsx', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  /** ********** Coverage Setup **********/
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  coverageReporters: ['lcov', 'text-summary']
}
