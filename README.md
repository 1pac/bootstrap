# bootstrap


## setup

```
$ cd frontend_src
$ npm install
```
## grunt task

It works at frontend_src

### Build CSS with Sass

```
$ grunt css
$ grunt c
```


### Build JS

```
$ grunt js
$ grunt j
```

### Watch

```
$ grunt watch
$ grunt w
```

### Build all(CSS and JS)

```
$ grunt build
$ grunt b
```

If you need 'js' task without qunit, then you can add custumized task like named 'js-debug' to Gruntfile.js.

```
grunt.registerTask('js',  [/* 'qunit', */'concat', 'uglify', 'copy', 'clean',]);
```


## Utility commands

It works at frontend_src.

### Start simple server

You can access to `0.0.0.0:8000` and check at browser.
```
$ npm run server
```

If you need change port number, you change package.json.

```
{
...
  "scripts": {
    ...
    "server": "php -S localhost:8000 -t ../public",
    ...
  },
...
}
```

### Cleanup in project

It remove dust files like a '.DS_Store'.

```
$ npm run cleanup
```

