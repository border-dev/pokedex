var fallback = require('connect-history-api-fallback')

module.exports = {
    browserify: {
        injectChanges: false, // workaround for Angular 2 styleUrls loading
        watchOptions: {
            ignored: 'node_modules'
        },
        server: {
            baseDir: ["../dist"],
            middleware: [
                fallback({
                    index: '/index.html',
                    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
                })
            ]
        },
        port: 9000,
        files: [
            "../dist/**",
            "!../dist/**.map"
        ],
        open: false,
        debug: true,
        ui: false
    },
    express: {
        httpPort: 8000,
        httpsPort: 8443,
        appPort: null,
        proxies: {}
    }
};
