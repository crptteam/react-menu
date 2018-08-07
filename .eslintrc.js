module.exports = {
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
  "extends": "airbnb",
};
/*
module.exports = {
  "env": {
  "browser": true
  },
    "extends": [
    "airbnb"
  ],
    "parser": "babel-eslint",
    "plugins": [
    "import",
    "jsx-a11y",
    "react",
    "promise"
  ],
    "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ]
      }
    }
  },
    "rules": {
    "quotes": ["error", "single"],
      "comma-dangle": ["warn", "always"],
      "array-bracket-newline": [
      "warn",
      "consistent"
    ],
      "arrow-body-style": [
      "warn",
      "as-needed"
    ],
      "arrow-parens": [
      "warn",
      "as-needed",
      {
        "requireForBlockBody": true
      }
    ],
      "function-paren-newline": [
      "error",
      "consistent"
    ],
      "import/prefer-default-export": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "object-curly-newline": [
      "error",
      {
        "consistent": true
      }
    ],
      "no-console": "warn",
      "no-shadow": [
      "warn",
      {
        "allow": [
          "acc",
          "callback",
          "cb",
          "data",
          "done",
          "error",
          "id",
          "idx",
          "key",
          "memo",
          "reject",
          "resolve",
          "result",
          "value"
        ]
      }
    ],
      "no-unused-vars": "warn",
      "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
      "react/no-unused-prop-types": "warn",
      "react/no-unused-state": "warn"
  }
}
*/
