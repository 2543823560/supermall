<template>
    <div class="tab-control">
      <div v-for="(item,index) in title"
           class="tab-control-item" :class="{active:index==currentIndex?true:false}" @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "TabControl",
      data(){
        return {
          currentIndex:0
        }
      },
      props:{
        title:{
          type:Array,
          default:[]
        }
      },
      methods:{
        itemClick(index){
          this.currentIndex=index
          this.$emit("clickIndex",index)
        }
      }
    }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  background-color:var(--color-background);
}
  .tab-control-item {
    flex: 1;
    margin:3px 0;
  }
  .tab-control-item span{
    /*border-bottom: solid  2px;*/
    padding: 0 3px;
    font-size: var(--font-size);
    color: var(--color-text);
  }
  .active  span{
    color: var(--color-tint);
    border-bottom: solid 2px var(--color-tint);
  }
</style>
