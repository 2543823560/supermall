<template>
<div class="detail-image-info">
  <p @click="fun">{{detailInfo.desc}}</p>
  <div class="image-list">
    <img v-for="(item, index) in imageList" :key="index" :src="item" alt="" class="image-list-item">
  </div>
</div>
</template>

<script>
    export default {
        name: "DetailImageInfo",
      props:{
        detailInfo:{
          type:Object,
          default:{}
        },
        imageList:{
          type:Array,
          default:[]
        }
      },
      data(){
          return {

          }
      },
      created() {
          this.fun()
      },
      mounted() {

      },
      methods:{
          fun(){
            // console.log(this.detailInfo.detailImage)
            // console.log(typeof  this.detailInfo.detailImage['0'])
          }
        }
    }
</script>

<style scoped>
  .detail-image-info p{
    padding:10px ;
  }
.image-list-item{
  width: 100%;
  border-bottom:5px solid #F2F2F2 ;
}
</style>
