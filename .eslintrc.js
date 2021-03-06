module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  overrides: [
    {
      files: ["**/*.ts"],
      rules: {
        "node/no-unsupported-features/es-syntax": "off",
      },
      parser: "@typescript-eslint/parser", // Specifies the ESLint parser
      extends: [
        "eslint:recommended",
        "plugin:node/recommended", // Uses the recommended rules from the eslint-plugin-node
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      settings: {
        node: {
          tryExtensions: [".ts"], // required so that import "example" will see "example.ts"
        },
      },
    },
    {
      files: ["tests/*"],
      env: {
        jest: true,
      },
      extends: ["plugin:jest/style"],
    },
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
