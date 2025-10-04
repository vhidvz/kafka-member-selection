module.exports = {
  apps: [
    {
      name: 'main',
      script: 'dist/main.js',
      instances: 5,
      exec_mode: 'cluster',
      env: { NODE_ENV: 'develop' },
    },
  ],
};
