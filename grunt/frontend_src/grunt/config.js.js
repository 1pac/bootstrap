module.exports = {
    //jslint:     require('./grunt/jslint'),
    qunit: {
        js_all:['<%= srcPath %>jstest/*.test.html'],
    },
    concat:     {
        //create modules.js
        js_lib_vendor : {
            files : {
                '<%= srcPath %>js/lib/vendor.js': ['<%= srcPath %>js/lib/vendor/*.js'],
            }
        },
        //create module.js
        js_lib_module : {
            files : {
                '<%= srcPath %>js/lib/module.js': ['<%= srcPath %>js/lib/module/*.js'],
            }
        },
    },
    uglify:     {
        options: {
            mangle:false,
            compress:false,
            beautify:true
        },
        //copy module.js to public
        js_lib_module : {
            files: {
                '<%= destPath %>js/lib/module.js': ['<%= srcPath %>js/lib/module.js']
            }
        },
        //copy other js-file to public
        js : {
            files: [{
                expand: true,
                cwd: '<%= srcPath %>js',
                src: ['**/*.js', '!lib/**/*.js', '!shared/**/*.js', '!_*.js'],
                dest: '<%= destPath %>js'
            }],
        }
    },
    copy:        {
        //copy vendor.js to public
        js_lib: {
            files: {
                '<%= destPath %>js/lib/vendor.js': ['<%= srcPath %>js/lib/vendor.js']
            }
        },
    },
    clean:      {
        js_lib_vendor : ['<%= srcPath %>js/lib/vendor.js'],
        js_lib_module : ['<%= srcPath %>js/lib/module.js'],
    },
};
