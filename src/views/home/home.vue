<template>
  <div id="home">
   <nav-bar class="home-nav">
     <div slot="center">购物车</div>
   </nav-bar>
    <Scroll class="content" ref="scroll" :probe-type="3"   :pullUpLoad="true"
            @clickPosition="clickPosition" @pullingUp="pullingUp">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control :title="['流行','新款','精选']" class="tab-control" @clickIndex="tabClick" ></tab-control>
      <GoodsList :goods="showGoods" :key="currentType"></GoodsList>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>
<script>
    import NavBar from "../../components/content/navbar/NavBar";
    import {getGoodsList, getHomeMultidata} from "../../network/home";
    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import Feature from "./childComps/feature";

    import TabControl from "../../components/content/tabContrl/TabControl";
    import GoodsList from "../../components/content/goods/GoodsList";
    import Scroll from "../../components/common/scroll/Scroll";
    import BackTop from "../../components/content/backTop/BackTop";
    export default {
        name: "Home",
      data(){
        return{
          banners:[],
          recommends:[],
          goods:{
            'pop':{
              page:0,
              list:[]
            },
            'new':{
              page:0,
              list:[]
            },
            'sell':{
              page:0,
              list:[]
            }
          },
          currentType:'pop',
          isShow:false
        }
      },
      components: {
        BackTop,
        Scroll,
        GoodsList,
        TabControl,
        Feature,
        RecommendView,
        HomeSwiper,
        NavBar,
      },
      created() {
          this.getHomeMultidata();
          this.getGoodsList(this.currentType)
      },
      computed:{
          showGoods(){
            return this.goods[this.currentType].list
          }
      },
      methods:{
        getHomeMultidata() {
          getHomeMultidata().then(res=>{
            console.log(res)
            this.banners=res.data.data.banner.list;
            this.recommends=res.data.data.recommend.list;
          })
        },
        getGoodsList(type){
          const page=++this.goods[type].page
          getGoodsList(type,page).then(res=>{
            console.log(res)
            this.goods[type].list.push(...res.data.data.list)
          })
        },
        tabClick(index){
          const type=['pop','new','sell']
          this.currentType=type[index]
          console.log(this.currentType)
          this.getGoodsList(this.currentType)
        },
        backClick(){
          this.$refs.scroll.scroll.scrollTo(0,0,2000)
        },
        clickPosition(position){
          this.isShow=(-position.y)>1000?true:false
        },
        pullingUp(){
          console.log('加载')
          this.getGoodsList(this.currentType)
          this.$refs.scroll.finishPullUp()
        }
      }
    }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }
  .home-nav{
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
}
  .tab-control{
    position: sticky;
    top: 44px;
  }
  .content{
    position: absolute;
    left:0;
    right:0;
    top:44px;
    bottom: 49px;
    overflow: hidden;
  }

</style>
