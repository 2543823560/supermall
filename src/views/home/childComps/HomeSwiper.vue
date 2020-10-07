<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="图片缺失">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
    export default {
        name: "HomeSwiper",
      components:{
        Swiper,
        SwiperItem
      },
      props:{
          banners:{
            type:Array,
            default:[]
          }
      }
    }
</script>

<style scoped>

</style>
