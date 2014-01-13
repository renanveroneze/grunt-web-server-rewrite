

module.exports = function( grunt ) {

    grunt.registerMultiTask('web-server-rewrite', function() {

        var server = require('web-server-rewrite'),
            port = this.data.port,
            base = this.data.base;

        if(this.data.keeplive) {
            var async =  this.async();
        }

        server.init( port, base );

    });

}