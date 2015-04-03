module.exports = {
      application: {
        dir: ['*.php', '!node_modules/**'
        ]
      },
      options: {
        bin: 'phpcs',
        standard: 'WordPress'
      }
    };