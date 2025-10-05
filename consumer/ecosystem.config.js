module.exports = {
  apps: [
    {
      name: 'consumer',
      script: 'dist/main.js',
      instances: 5,
      exec_mode: 'cluster',
    },
  ],
};
