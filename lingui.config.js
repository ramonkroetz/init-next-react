/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "pt-BR"],
  catalogs: [
    {
      path: "src/locales/{locale}",
      include: ["src/"],
    },
  ],
};
