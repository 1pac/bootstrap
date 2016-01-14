module.exports = {
    watch : {
        js : {
            files: [
                '<%= srcPath %>js/**/*.js',
                '<%= srcPath %>js/*.js'
            ],
            tasks: ['js_debug']
        },
        css : {
            options: {
                livereload: true,
            },
            files: [
                '<%= srcPath %>scss/**/*.scss'
            ],
            tasks: ['css']
        },
    },
};
