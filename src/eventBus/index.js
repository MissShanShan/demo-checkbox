import Vue from 'vue'

// 跨组件传值
// 1.创建eventBus文件 创建一个空白的vue对象
// 2.接收方在组件创建时注册一个事件
// created(){
// eventBus.$on('send',(val,val2) => {

// })
// }

// 3.传值放出发注册的事件
// eventBus.$emit('send',val,val2)
export default new Vue()