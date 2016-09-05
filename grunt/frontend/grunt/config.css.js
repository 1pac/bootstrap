module.exports = {
    //csslint:    require('./grunt/csslint'),
    sass : {
        css: {
            options: {
                sourcemap: 'none',
                style: 'expanded',
                noLineComment:false
            },
            files: [{
                expand: true,
                cwd: '<%= srcPath %>/css',
                src: ['*.scss', '**/*.scss'],
                dest: '<%= destPath %>/css',
                ext: '.css',
            }]
        },
    },
    //compass:    require('./compass'),
};