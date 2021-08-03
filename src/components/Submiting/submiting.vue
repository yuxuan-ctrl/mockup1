<template>
  <div>
      <img src="../../assets/img/Submiting.jpg" alt="" width="100%" height="100%">
      {{exit()}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            // exit
        }
    },
    methods:{
        exit(){
            setTimeout(()=>{
                this.$router.push('/plana')
            },3000)
        }
    }
}
</script>

<style>

</style>