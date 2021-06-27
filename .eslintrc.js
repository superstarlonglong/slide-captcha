module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": "babel-eslint",
    },
    "plugins": [
    ],
    "rules": {
        'no-console': 'off',
        'camelcase': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define':'off',
        'func-names':'off',
        'no-undef': 'off',
        'no-multi-assign':'off',
        'no-shadow':'off',
        'no-param-reassign':'off',
        'no-useless-concat':'off'
    }
};