'use strict';

module.exports = {
    browserSync:{
        settings: {
            injectChanges: false, // workaround for Angular 2 styleUrls loading
                watchOptions: {
            ignored: 'node_modules'
            },
            server: {
                baseDir: "../dist/"
            },
            port: 9000,
                files: ["../dist/**", "!../dist/**.map"],
            open: false,
            debug: true,
            ui: false
        },
        proxies: "",
        callback: function noop() {}
    }
};
