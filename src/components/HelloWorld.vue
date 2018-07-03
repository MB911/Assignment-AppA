<template>
  <ul>
    <li v-for="message in messages">
      {{message}}
        </li>
    </ul>
</template>

<script>
import Socket from "../websocketsdata.js";
export default {
        name: 'HelloWorld',
        data(){
            return {
                messages: []
            }
        },
        methods:{
          handleMessage(msg){
             this.messages.push(msg)
          }
        },
        created(){
            Socket.$on("message", this.handleMessage)
        },
        beforeDestroy(){
            Socket.$off("message", this.handleMessage)
        }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
