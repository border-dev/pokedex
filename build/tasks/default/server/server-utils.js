/*
 * Available servers for live reloading
 * */

'use strict';

module.exports = function (gulp, paths) {
    var browserSync     = require('browser-sync'),
        express         = require('express'),
        bodyParser      = require('body-parser'),
        cookieParser    = require('cookie-parser'),
        gutil           = require('gulp-util'),
        fs              = require('fs'),
        http            = require('http'),
        https           = require('https'),
        handleErrors    = require('../../../utils/handleErrors'),
        eventLogger     = require('../../../utils/eventLogger'),
        serverConf        = require('../../../server.config.js');

    var serverOptions;

    function browserSyncServer(env, port) {
      serverOptions = serverConf.browserify;

      function run() {
        eventLogger.start("'browserSync'");
        var bs = browserSync.create();
        bs.init(serverOptions);
      }

      return run();
    }

    function expressServer(env, port) {
      function run() {
        eventLogger.start("express server");
        // Only listen for HTTPS if a port is defined
        // var httpsPort = port || paths['server'].httpsPort || false;
        // if (httpsPort) {
        //     https.createServer({
        //         key: fs.readFileSync(__dirname + '/keys/development.key'),
        //         cert: fs.readFileSync(__dirname + '/keys/development.crt')
        //     }, router).listen(httpsPort, function() {
        //         gutil.log('Listening for HTTPS connections on port', gutil.colors.magenta(httpsPort));
        //     });
        // }

        // Always listen for HTTP connections
        var httpPort = paths['server'].httpPort || 9000;
        http
            .createServer(function (req, res) {
                req.on('error', handleErrors);
                res.end();
            })
            .on('clientError', handleErrors)
            .listen(httpPort, function() {
            gutil.log('Listening for HTTP connections on port', gutil.colors.magenta(httpPort));
        });

        var app = express();
        // Explicitly set extended to true since the default value will change to false in next release.
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
        app.use(cookieParser());

        app.listen(paths['server'].appPort);
      }

      return run();
    }

    return {
        browserSync: browserSyncServer,
        express: expressServer
    };
};
