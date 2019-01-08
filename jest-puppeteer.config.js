module.exports = {
    launch: {
        headless: false,
        slowMo: 10,
        devtools: true,
        args: ["--no-sandbox", "--disable-popup-blocking", "--disable-infobars"],
    },
    browserContext: 'default',
    server: {
        command: `PORT=3000 react-scripts start`,
        port: 3000,
        launchTimeout: 4000,
    },
}