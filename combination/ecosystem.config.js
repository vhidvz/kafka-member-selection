module.exports = {
  apps: [
    {
      name: 'combination',
      script: 'dist/main.js',
      instances: 5,
      exec_mode: 'cluster',
    },
  ],
};
