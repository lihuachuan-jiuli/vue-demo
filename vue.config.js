//  vue脚手架项目 - 默认的配置文件名
// webpack + node环境 - 导出配置项
// CommonJS 规范
module.exports = {
  devServer: {
    port: 3000, //端口号
    open: true, //浏览器自动打开
  },
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
