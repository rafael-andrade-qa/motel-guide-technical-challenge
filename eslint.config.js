import mochaPlugin from 'eslint-plugin-mocha';
import pluginChaiFriendly from 'eslint-plugin-chai-friendly';
import cypressPlugin from 'eslint-plugin-cypress';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.cypress,
        ...globals.mocha,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      cypress: cypressPlugin,
      mocha: mochaPlugin,
      'chai-friendly': pluginChaiFriendly,
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',

      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error',
      'cypress/no-async-before': 'error',
      'cypress/no-pause': 'error',
      'cypress/no-debug': 'error',

      'mocha/no-exclusive-tests': 'warn',
      'mocha/no-skipped-tests': 'warn',

      'chai-friendly/no-unused-expressions': 'error',
    },
  },
];
