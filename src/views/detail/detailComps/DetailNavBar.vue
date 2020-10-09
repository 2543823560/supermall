<template>
  <NavBar class="detail-nav-bar">
    <div slot="left">
        <img src="~assets/img/common/back.svg" class="backImg" @click="back"/>
    </div>
    <div slot="center" class="detail-nav-bar-center">
      <div v-for="(item,index) in navBarText" class="detail-nav-bar-center-item"
           :class="{active:index===currentIndex}" @click="clickCenterItem(index)">
        {{item}}
      </div>
      <div></div>
    </div>
  </NavBar>
</template>

<script>
    import NavBar from "../../../components/content/navbar/NavBar";
    export default {
        name: "detailNavBar",
      components: {NavBar},
      props:{
          navBarText:{
            type:Array,
            default:[]
          }
      },
      data(){
          return{
            currentIndex:0
          }
      },
      methods:{
        clickCenterItem(index){
          this.currentIndex=index
        },
        back(){
          console.log('back')
        }
      }
    }
</script>

<style scoped>
  .detail-nav-bar-center{
    display: flex;
  }
  .detail-nav-bar-center-item{
    flex: 1;
  }
  .backImg{
    margin-top: 12px;
  }
  .active{
    color: var(--color-tint);
  }
</style>
