<template>

  <div>
    
    {{val1 | reverceVal}}
    
  </div>
</template>

<script>
import eventBus from "../eventBus"
import { deflate } from 'zlib';

export default{
  data(){
    return{
      name:'',
      user:{
        name:'dd',
        id:''
      }
    }
  },
  created(){

    eventBus.$on('send',(index,parne) => {
      console.log(index)
    })
  },
  watch:{
    name(newVal,oldVal){//简单数据类型
      console.log(newVal,oldVal)
    },
    user:{//深度监听，复杂数据类型
      handler(newVal,oldVal){
        
      },
      deep:true,
      immediate:true//立马执行
    }
  }
}


</script>