const { execSync } = require('child_process');

const { writeFileSync } = require('fs');

const { join } = require('path');

const webpack = require('webpack');

const { v4: uuidv4 } = require('uuid');

const packageConfig = require(join(process.cwd(), 'package.json'));

const uuid = uuidv4();

const date = Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
}).format(new Date());

const commitHash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();

if (packageConfig.buildNumber !== undefined) {
    packageConfig.buildNumber =
        parseInt(packageConfig.buildNumber || 0, 10) + 1;

    writeFileSync(
        join(process.cwd(), 'package.json'),
        JSON.stringify(packageConfig, null, 2)
    );
}

module.exports = new webpack.DefinePlugin({
    __BUILD_NUMBER__: packageConfig.buildNumber,
    __BUILD_UUID__: JSON.stringify(uuid),
    __BUILD_DATE__: JSON.stringify(date),
    __BUILD_COMMIT_HASH__: JSON.stringify(commitHash)
});
