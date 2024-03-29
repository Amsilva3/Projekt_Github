module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      {
        "plugins": ["react-hooks"],
        // ...
        "rules": {
          "react-hooks/rules-of-hooks": 'error',
          "react-hooks/exhaustive-deps": 'warn' // <--- THIS IS THE NEW RULE
        }
      },
    ],
  },
}
