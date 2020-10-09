<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" class="detail-swiper-item">
        <img :src="item" alt="图片缺失">
    </swiper-item>
  </swiper>
</template>
<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
    export default {
        name: "DetailSwiper",
      props:{
        topImages:{
          type:Array,
          default:[]
        }
      },
      components: {
        Swiper,
        SwiperItem
        }
    }
</script>

<style scoped>
  .detail-swiper-item{
    height: 300px;
  }
</style>
