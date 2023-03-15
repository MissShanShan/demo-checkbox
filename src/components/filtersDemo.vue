<template>

  <div>
    
    {{val1 | reverceVal}}
    
  </div>
</template>

<script>
// import moment from 'moment'
import eventBus from "../eventBus"
export default{
  // name:"FilderDemo",
  data(){
    return{
      val1:"hello",
    }
  },
  filters:{
    // FormData(val){
    //   return moment(val).format('YYYY-MM-DD')
    // },
    reverceVal(val){
      // console.log(val)
      return val.split('').reverse().join('')
    }
  },
  computed:{
  },
  methods: {

    todo(){
      eventBus.$emit('send',index , param)
    }
  }
}
</script>