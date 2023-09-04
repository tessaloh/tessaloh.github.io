# vue-sidebar

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy to Github

* Create a config file with the publicPatch key
```
touch vue.config.js
publicPath: process.env.NODE_ENV === 'production'
    ? '/repo-name/'
    : '/'
```

* Create de file deploy.sh
```
touch deploy.sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

* Push the code
```
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

* Assign permissions to the deploy file
```
chmod +x deploy.sh 
```

* Execute deploy
```
./deploy.sh
```

## Visit app on [GitHub Pages](https://kriz1618.github.io/vue-sidebar/)
