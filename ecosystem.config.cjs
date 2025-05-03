module.exports = {
  apps: [
    {
      name: "nuxt-example",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
