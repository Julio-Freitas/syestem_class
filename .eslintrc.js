module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:jest/recommended',
        'plugin:jest/all',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['prettier', 'react', 'react-hooks', 'jest'],
    rules: {
        'jsx-a11y/control-has-associated-label': 'off',
        'react/self-closing-comp': 'off',
        'import/no-unresolved': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/forbid-prop-types': 'off',
        'no-param-reassign': [2, { props: false }],
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': 0,
        'import/prefer-default-export': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-case-declarations': 0,
        'spaced-comment': 0,
        'no-underscore-dangle': 0,
        'react/react-in-jsx-scope': 0,
        'no-unexpected-multiline': 'warn',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'jest/prefer-expect-assertions': 0,
        'jest/no-hooks': [
            'error',
            {
                allow: ['afterEach', 'afterAll'],
            },
        ],
        'react/require-default-props': 0,
        'react/default-props-match-prop-types': 0,
    },
};
