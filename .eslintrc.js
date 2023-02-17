module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: ["plugin:nuxt/recommended", "plugin:vue/vue3-recommended"],
  rules: {
    "vue/script-setup-no-uses-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
  },
};
