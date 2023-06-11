const script = process.platform === 'win32'
    ? './scripts/yarn-windows.js' : 'yarn';

module.exports = [{
    name: 'Portfolio',
    cwd: '.',
    script,
    args: 'next start -p 4000',
    instances: 1,
    autorestart: true,
    watch: false,
}];
