<template>
  <div id="nav">
      <div id="nav_a">
            <div id="nav_a_left" @click="back" >
                <img src="../assets/img/icon/返回.png" alt="">
            </div>
            <div id="nav_a_middle" >
                <p>{{Nav_name}}</p>
            </div>
            <div id="nav_a_right" :class="{ disabled1 : op}" @click="Over">
                <img src="../assets/img/icon/飞机.png" alt="" >
            </div>
      </div>
       <div id="nav_b">

                <div class="nav_b_left"  :class="{active : isA}">
                    <img src="../assets/img/icon/计划.png" alt="" >
                </div>
                <div class="nav_b_left"   :class="{active : isM}">
                    <img src="../assets/img/icon/制度流程.png" alt="" >
                </div>
                <div class="nav_b_left"   :class="{active : isB}">
                    <img src="../assets/img/icon/计划.png" alt="">
                </div>
      </div>
  </div>
</template>

<script>

export default {
    
    props:{
        Nav_name:{
            type:String
        },
        op:{
            type:Boolean,
            default:true
        },
        isA:{
            type:Boolean,
            default:false
        },
        isM:{
            type:Boolean,
            default:false
        },
        isB:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        back(){ 
             this.$router.go(-1)
        },
        OnmouseOver(event){
            // event.target.style.border="2px blue"
            event.currentTarget.parentElement.style=" border-bottom:solid 6px steelblue;"
        },
        Onmouseout(event){
            event.currentTarget.parentElement.style=""
        },
        Over(){
            this.$router.push('./submit')
        }
    }
}
</script>

<style>
#nav{
    width: 100%;
    height: 15rem;
    margin-bottom: 2rem;
}
#nav_a{
    height: 6rem;display: flex;line-height: 6rem;text-align: center;
}
#nav_a img{
    width: 3rem;margin-top: 2rem;
    
    /* vertical-align: middle; */
}
#nav_a_left{
    width: 6rem;
}
#nav_a_middle{
    flex: 1;font-size: 3rem;
}
#nav_a_right.disabled{
    width: 6rem;
    opacity: 0.8;
    pointer-events: none;
}
#nav_a_right{
    width: 6rem;
    /* opacity: 0.2; */
}

#nav_b{
     height: 6rem;display: flex;line-height: 44px;text-align: center;margin-top: 3rem;
}
#nav_b img{
    width: 6rem;
    height: 6rem;
    margin-top: 5px;padding: 1rem;
    /* vertical-align: middle; */
}

.nav_b_left{
    flex: 1;
}
.active{
    border-bottom:solid 8px steelblue;

}
/* .opc{
    opacity: 1;
} */
.disabled1 {
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
}
</style>