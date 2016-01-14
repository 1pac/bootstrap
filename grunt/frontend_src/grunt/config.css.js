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
                cwd: 'scss',
                src: ['*.scss', '**/*.scss'],
                dest: '../public/css',
                ext: '.css',
            }]
        },
    },
    //compass:    require('./compass'),
};