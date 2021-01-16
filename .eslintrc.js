module.exports = {
    env: {
        browser: true,
        es2020: true,
        'jest/globals': true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:jest/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'prettier/standard',
    ],
    plugins: ['@typescript-eslint', 'import', 'jest', 'jsx-a11y', 'prefer-arrow', 'prettier', 'react', 'react-hooks'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.eslint.json',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    root: true,
    rules: {
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        // should be rewritten as `['error', { allowAsStatement: true }]` in ESLint 7 or later
        // SEE: https://github.com/typescript-eslint/typescript-eslint/issues/1184
        'no-void': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                argsIgnorePattern: '_',
                ignoreRestSiblings: false,
                varsIgnorePattern: '_',
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/prefer-default-export': 'off',
        'import/default': 'off',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/jsx-props-no-spreading': [
            'error',
            {
                html: 'enforce',
                custom: 'enforce',
                explicitSpread: 'ignore',
            },
        ],
        // React v17対応
        'react/react-in-jsx-scope': 'off',
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                disallowPrototype: true,
                singleReturnOnly: false,
                classPropertiesAllowed: false,
            },
        ],
    },
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                paths: ['front/dev'],
            },
            webpack: {
                config: './webpack.config.js',
            },
        },
    },
};
