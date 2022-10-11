import Vue from 'vue' //引入vue对象, 类似于<script src="vue.js"></script>
import App from './App.vue' //App.vue文件里的对象引入过来(vue项目的页面入口)

Vue.config.productionTip = false //在控制有一句提示消息

new Vue({  //开始实例化vue
  render: h => h(App), //固定语法 准备渲染App页面
}).$mount('#app')   //固定语法 渲染到index,html 文件里 id 叫 app 的标签上
 