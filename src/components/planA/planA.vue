<template>
<div>
  <navq Nav_name='Joe Report - partA' :isA=isA></navq>
  <div id="Nav">
      <div class="Nav_bar">
          <img src="../../assets/img/icon/计划.png" alt="" @mouseenter="OnmouseOver($event)"  @mouseout="Onmouseout($event)">
      </div>
      <div class="Nav_bar">
          <img src="../../assets/img/icon/制度流程.png" alt="" @mouseenter="OnmouseOver($event)"  @mouseout="Onmouseout($event)">
      </div>
  </div>
  <h1>Job NO.:2020/20390/BOC</h1>
  <h1>Assigned Inspector : David Chow</h1>
  <h1 ><strong> S9 Florissa Park Giffard Mansion</strong></h1>
  <h1 style="font-weight:900 ;font-size:3rem ; color:black">Part A</h1>
  <form action="text" :class="{form:isReadOnly}" id="txt1" >
      <h1>1.a Type of Building/Land Use</h1><br>
    <div class="Form"  >
    <div id="p_a_1">
      <label for="a_1" @input="ChangBackground($event)">
        <input  type="radio" name="a" id="a_1" value="Residential" style="display:none" ><h1 id="h1" >Residential:</h1> 
     </label>
     </div>
     <div id="p_a_2">
     <label for="a_2" @input="ChangBackground($event)">
        <input type="radio" name="a" id="a_2" value="Composite" style="display:none"><h1 >Composite:</h1> 
     </label>
     </div>
     <div id="p_a_3">
     <label for="a_3" @input="ChangBackground($event)">
        <input type="radio" name="a" id="a_3" value="Industrial" style="display:none"><h1>Industrial:</h1> 
     </label>
     </div>
     <div id="p_a_4">
     <label for="a_4" @input="ChangBackground($event)">
        <input type="radio" name="a" id="a_4" value="Office" style="display:none"><h1>Office:</h1> 
     </label>
     </div>
     <div id="p_a_5">
     <label for="a_5" @input="ChangBackground($event)">
        <input type="radio" name="a" id="a_5" value="Retail" style="display:none"><h1>Retail:</h1> 
     </label>
     </div>
    </div>
  </form>
  <div id="save">
  <button id="button_left" @click="readonly">Save Only</button>
  <button id="button_right" @click="floorplan">Mark as Complete</button>
  </div>
</div>
</template>

<script>
import navq from '../Nav.vue'
export default {
    data(){return {
       isActive:false ,
       isReadOnly:false,
       isA:true
    }},
    components:{
        navq
    },
    methods:{
        OnmouseOver(event){
            // event.target.style.border="2px blue"
            event.currentTarget.parentElement.style=" border-bottom:solid 6px blue;"
        },
        Onmouseout(event){
            event.currentTarget.parentElement.style=""
        },
        ChangBackground(event){
            event.currentTarget.parentElement.style.background='yellow'
            
            // console.log(event.currentTarget.parentElement);
            // console.log(222)
        },
        readonly(){
             document.getElementById('txt1').readOnly=true;
             this.isReadOnly = true
        },
        floorplan(){
            this.$router.push('/floorplan')
            console.log(666);
        }
    }
}
</script>

<style>
    #Nav{
        display: flex;
    background: grey;width: 100%;height: 10rem;opacity: 0.6;
    }
     #Nav img{
         width: 5rem;margin-top: 2.5rem;
     }
    .Nav_bar{
        flex: 1;text-align: center;
    }
    .Form h1{
        font: 5rem;
    }
    
    #save{
        display: flex;width: 100%;height: 10rem;margin-top: 10rem;padding:2rem;
    }
    #save button{
        width: 20rem;
        height: 10rem;
        flex: 1;
        font: 3em sans-serif;
        padding: 1rem;
    }
    #button_left{
        margin-right:2rem ;background-color: rgb(86, 105, 167);
    }
    #button_right{
        margin-right:2rem ;background-color: yellow;
    }
    .form{
        position: relative;
        
    }
    
    
</style>