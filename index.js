// eslint-disable-next-line no-undef
module.exports = {
  extends: ['plugin:react/recommended', '@nearmap/eslint-config-base'],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  },

  plugins: ['babel', 'react', 'react-hooks'],

  rules: {
    'max-len': [
      'error',
      {
        code: 120
      }
    ],
    /* annoying to have to escape  */
    'react/no-unescaped-entities': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-wrap-multilines': ['error'],
    'react/jsx-tag-spacing': ['error', {beforeSelfClosing: 'always'}],

    'react/jsx-pascal-case': ['error'],
    'react/jsx-no-target-blank': ['error'],
    'react/jsx-no-comment-textnodes': ['error'],
    'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],
    // not sure about using <p>{'spam'}</p>
    // 'react/jsx-no-literals': ['error'],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowBind: false
      }
    ],
    // 'react/jsx-key': ['error'],
    'react/jsx-handler-names': ['error'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-curly-spacing': [2, 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
