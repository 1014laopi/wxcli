const { defineConfig } = require('@vue/cli-service')
console.log(process.env.NODE_ENV, process.env.APP_ENV, '12311233')
module.exports = defineConfig({
  transpileDependencies: true
})
