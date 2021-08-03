<template>
  <div>
      <navp Nav_name='Joe Report - partB' :op= isop :isB=isB ></navp>
      <h1>{{this.$route.query.value}}</h1>
      <img src="../../assets/img/planB-b.jpg" alt="" style="width:100% ; height:100%; margin-top:2rem">
  </div>
</template>

<script>
import navp from '../Nav.vue'
export default {
    data(){
        return{
            isop:false,
            isB:true
        }
    },
    components:{
        navp
    }
}
</script>

<style>

</style>