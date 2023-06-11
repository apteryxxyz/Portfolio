const script = process.platform === 'win32'
    ? './scripts/npm-windows.js' : 'npm';

module.exports = [{
    name: 'Portfolio',
    cwd: '.',
    script,
    args: 'start',
    instances: 1,
    autorestart: true,
    watch: false,
}];
