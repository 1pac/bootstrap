module.exports = {
    //csslint:    require('./grunt/csslint'),
    sass : {
        css: {
            options: {
                sassDir    : '<%= srcPath %>scss',
                cssDir     : '<%= destPath %>css',
                outputStyle: 'expanded',
                noLineComments : true
            }
        },
    },
    //compass:    require('./compass'),
};