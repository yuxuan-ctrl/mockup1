<template>
<div>
  <navp Nav_name='Floor Plan' :isM="isM"></navp>
  <h1>Job NO.:2020/20390/BOC</h1>
  <h1>Assigned Inspector : David Chow</h1>
  <h1 style="color : black"><strong> S9 Florissa Park Giffard Mansion</strong></h1>
    <div id="plana">
        <img src="../../assets/img/plana.jpg" alt=""><br>
        <label for="a"><input type="text" width="1000px" id="a" @input="submitvalue($event)"></label><br>
        <button class="submit" @click="submit">Mark Inspection Spot</button>
    </div>
    <div id="planb">
        <img src="../../assets/img/planb.jpg" alt=""><br>
        <label for="b"><input type="text" width="1000px" id="b" @input="submitvalue($event)"></label><br>
        <button class="submit" @click="submit">Mark Inspection Spot</button>
    </div>

  </div>
</template>

<script>
import navp from '../Nav.vue'
export default {
    data(){
        return{
            value:'',
            isM:true
        }
    },
    components:{
        navp
    },
    methods:{
        submit(){
            this.$router.push({
                path:'/planb',
                query:{value:this.value}
                })
        },
        submitvalue(event){
            this.value=event.target.value
            // console.log(event.target.value);
        }
    }
}
</script>

<style>
#plana{
    width: 100%;
}
#plana img{
width: 100%;
}
#planb img{
width: 100%;

}
#plana #a{
    width: 60%;height: 4rem;margin-left: 11rem;font-size: 30px;box-shadow: 0 0 3px rgb(185, 184, 184);
}
#planb #b{
    width: 60%;height: 4rem;margin-left: 11rem;font-size: 30px;box-shadow: 0 0 3px rgb(185, 184, 184);
}
.submit{
    width: 60%;height: 8rem;margin-left: 11rem;font-size: 30px;box-shadow: 0 0 3px rgb(185, 184, 184) ;margin-top:2rem;background: yellow;

}
</style>