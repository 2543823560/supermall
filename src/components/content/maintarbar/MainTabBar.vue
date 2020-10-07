<template>
  <tab-bar>
    <tab-bar-item path="/home" color="red">
      <img src="~assets/img/tabbar/home.svg" slot="tab-bar-item-img1"/>
      <img src="~assets/img/tabbar/home_active.svg" slot="tab-bar-item-img2"/>
      <div slot="tab-bar-item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="tab-bar-item-img1"/>
      <img src="~assets/img/tabbar/category_active.svg" slot="tab-bar-item-img2"/>
      <div slot="tab-bar-item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" color="red">
      <img src="~assets/img/tabbar/shopcart.svg" slot="tab-bar-item-img1"/>
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="tab-bar-item-img2"/>
      <div slot="tab-bar-item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/img/tabbar/profile.svg" slot="tab-bar-item-img1"/>
      <img src="~assets/img/tabbar/profile_active.svg" slot="tab-bar-item-img2"/>
      <div slot="tab-bar-item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBarItem from "../../common/tabbar/TabBarItem";
  import TabBar from "../../common/tabbar/TabBar";
    export default {
      name: "MainTabBar",
      components:{
        TabBarItem,
        TabBar
      }
    }
</script>

<style scoped>

</style>
