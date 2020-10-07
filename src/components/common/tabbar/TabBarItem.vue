<template>
  <div class="tab-bar-item" @click="click" :style="getStyle">
    <div v-if="!active">
      <slot name="tab-bar-item-img1">
      </slot>
    </div>
    <div v-else>
      <slot name="tab-bar-item-img2" ></slot>
    </div>
    <div :class="{active}">
      <slot name="tab-bar-item-text"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      data(){
          return{

          }
      },
      props:{
        path:{
          type:String
        },
        color:{
          type: String,
          default:'red'
        }
      },
      computed:{
        active(){
          return this.$route.path.indexOf(this.path)!=-1?true:false;
        },
        getStyle(){
          return this.active==true?{color:this.color}:{}
        }
      },
      methods:{
         click(){
            this.$router.replace(this.path)
          }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    background-color: #f6f6f6;
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
</style>
