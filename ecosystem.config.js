module.exports = {
  apps: [{
    script: 'npm start',
  }],
  deploy: {
    production: {
      key: 'key2.pem',
      user: 'ubuntu',
      host: '13.54.10.157',
      ref: 'origin/main',
      repo: 'git@github.com:3nzoo/cargo.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh-options': 'ForwardAgent=yes'
    },
    development: {
      key: 'key1.pem',
      user: 'ubuntu',
      host: '3.27.137.159',
      ref: 'origin/develop',
      repo: 'git@github.com:3nzoo/keatrucking.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env development',
      'pre-setup': '',
      'ssh-options': 'ForwardAgent=yes'
    }
  }
};
