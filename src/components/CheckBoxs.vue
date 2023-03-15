<template>
    <div>
      <span>全选</span>
      <input type="checkbox" v-model="isAll">
      <button @click="fanxuan">反选</button>
    <ul>
      <li v-for="(obj,index) in arr" v-bind:key="index">
        <input type="checkbox" v-model="obj.c">
        <span>{{obj.name}}</span>
      </li>
    </ul>
    </div>

</template>
<script>
import { get } from 'http';

export default{
  name:"checkbox",
  data(){
    return{
      val1:"hello",
      arr:[{name:'猪八戒',c:false},{name:'孙悟空',c:false},{name:'沙和尚',c:false}]
    }
  },
  computed:{
    isAll:{
      set(val){
        this.arr.forEach(obj => obj.c = val)
      },
      get(){
        return this.arr.every(obj => obj.c === true)
      }
    }
  },
  methods: {
    fanxuan(){
      this.arr.forEach(obj => obj.c = !obj.c)
    }
  }
}
</script>
