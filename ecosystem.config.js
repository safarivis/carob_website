module.exports = {
  apps: [
    {
      name: 'carob-proposal',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3050',
      cwd: '/var/www/carob.lewkai.com',
      env: {
        NODE_ENV: 'production',
        OPENAI_API_KEY: 'sk-eDgovrrYyKcsqLR55TwtviPPAOSttTnmpQhkLfAdRRozoRcc',
        OPENAI_BASE_URL: 'https://api.moonshot.cn/v1',
      },
    },
  ],
};
