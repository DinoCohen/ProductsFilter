module.exports = {
    parserOptions: {
      ecmaVersion: 2020, // Use the latest ECMAScript version
      sourceType: 'module', // Allow using imports
      requireConfigFile: false, // Babel config check disabled
    },
    env: {
      browser: true, // Set environment for browser
      node: true,    // Set environment for Node.js
    },
    extends: [
      'eslint:recommended', // Use recommended ESLint rules
      'plugin:vue/vue3-essential', // Use Vue 3 rules
    ],
    rules: {
      // Custom rules can be added here
      // Example: Turn off console warning
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      // You can add more rules if necessary
    },
  };
  