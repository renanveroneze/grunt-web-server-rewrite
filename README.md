# Grunt Web Server Rewrite

### Install
```bash
    npm install grunt-web-server-rewrite
```

### Usage example:
In first step, create a file called `rewrite.json` where is folder root.

**rewrite.json**
```
    {
        "pages": {
            "/": "index.html",
            "/products/(.*)": "index.html"
        }
    }
```

***In Gruntfile.js***
```js
    'web-server-rewrite': {
        config: {
            port: 2000,
            base: path + 'web_static/',
            keepalive: false
        }
    }
```

```js
    grunt.loadNpmTasks('grunt-web-server-rewrite');
```
