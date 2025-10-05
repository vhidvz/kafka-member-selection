module.exports = {
  apps: [
    {
      name: 'combination',
      script: 'dist/main.js',
      instances: 3,
      exec_mode: 'cluster',
    },
  ],
};
