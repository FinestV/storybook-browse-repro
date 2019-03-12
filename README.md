# Steps to reproduce

Seems to be an issue with serve

```js
yarn storybook:build

yarn serve
``` 

Browse directly to the story http://localhost:9011/?path=/story/helloworld--test

httpserver does not exhibit the issue

```js
yarn httpserver
```

Browsing directly to the story loads fine http://localhost:9010/?path=/story/helloworld--test