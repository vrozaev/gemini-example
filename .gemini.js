module.exports = {
    rootUrl: 'http://yandex.ru',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    calibrate: false,
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },
    system: {
        plugins: {
            'html-reporter/gemini': {
                enabled: true,
                path: 'reports',
                defaultView: 'all',
                baseHost: 'test.com'
            }
        }
    }
};
