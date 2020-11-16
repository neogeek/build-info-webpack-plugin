const { execSync } = require('child_process');

console.log(execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim());
