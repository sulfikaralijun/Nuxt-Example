module.exports = {
  apps: [
    {
      name: "nuxt-example",
      port: "3000",
      exec_mode: "fork",
      script: "./.output/server/index.mjs",
    },
  ],
};
