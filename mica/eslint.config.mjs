import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {
    "rules": {
    "accessor-pairs": "error",
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-callback-return": "error",
    "array-element-newline": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "block-scoped-var": "error",
    "block-spacing": "off",
    "brace-style": "off",
    "callback-return": "error",
    "camelcase": "error",
    "capitalized-comments": "off",
    "class-methods-use-this": "off",
    "comma-dangle": "error",
    "comma-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "complexity": "warn",
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "consistent-return": "off",
    "consistent-this": "error",
    "curly": "error",
    "default-case": "error",
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": true
      }
    ],
    "eol-last": "off",
    "eqeqeq": "off",
    "for-direction": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": [
      "error",
      "never"
    ],
    "func-style": "off",
    "generator-star-spacing": "error",
    "getter-return": "error",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "off",
    "id-blacklist": "error",
    "id-length": "off",
    "id-match": "error",
    "indent": "off",
    "indent-legacy": "off",
    "init-declarations": "off",
    "jsx-quotes": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "line-comment-position": "warn",
    "lines-around-comment": "warn",
    "lines-around-directive": "error",
    "max-depth": "warn",
    "max-len": "off",
    "max-lines": "off",
    "max-nested-callbacks": "error",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-ternary": "off",
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "off",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-catch-shadow": "off",
    "no-confusing-arrow": "error",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "off",
    "no-else-return": "off",
    "no-empty-function": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": "off",
    "no-mixed-requires": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "off",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "off",
    "no-native-reassign": "error",
    "no-negated-condition": "off",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "error",
    "no-tabs": "off",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "warn",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": "off",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "off",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "off",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": [
      "error",
      {
        "allowMultiplePropertiesPerLine": true
      }
    ],
    "object-shorthand": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-assignment": "off",
    "operator-linebreak": [
      "error",
      null
    ],
    "padded-blocks": "off",
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": ["error", {
      "array": false,
      "object": true
    }
  ],
    "prefer-numeric-literals": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-reflect": "off",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "off",
    "quote-props": "off",
    "quotes": "off",
    "radix": "error",
    "require-await": "error",
    "require-jsdoc": "off",
    "rest-spread-spacing": "error",
    "semi": "off",
    "semi-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "error",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-unary-ops": "error",
    "spaced-comment": [
      "warn",
      "always"
    ],
    "strict": "error",
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "template-tag-spacing": "error",
    "unicode-bom": [
      "error",
      "never"
    ],
    "valid-jsdoc": [ "error",
        {
             "requireReturn": false
        }
    ],
    "vars-on-top": "error",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
    "yoda": [
      "error",
      "never"
    ],
    "@calm/react-intl/missing-attribute": [1,
        {
            "noTrailingWhitespace": false,
            "noSpreadOperator": true,
            "requireDescription": false,
            "formatDefineMessages": false
        }
    ],
    "@calm/react-intl/missing-values": 1,
    "react/no-unused-prop-types": 1
  },
    files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];