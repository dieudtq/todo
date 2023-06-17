module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["standard-with-typescript", "plugin:vue/vue3-essential"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 3
        },
        multiline: {
          max: 1
        }
      }
    ],
    quotes: [
      "error",
      "double"
    ]
  }
}
