<template>
    <div class="login" >
        <img src="../../assets/img/loginpage.png" alt="">
        <button id="loginbutton" @click="login">login</button>
    </div>
</template>

<script>

export default {
    methods:{
        login(){
            console.log(111);
            this.$router.push({path: '/plana'})
        }
    }
}
</script>

<style>
body{
    min-width: 375px;
}
    .login img{
      height: 100%;
      width: 100%;
    position: relative;

    }
    #loginbutton{
      background:yellow;
      position: absolute;
      width: 60rem;
      height: 8rem;
      top: 47rem;
      left: 3rem; 
      margin: 0 auto;
      opacity: 0;
    } 
</style>