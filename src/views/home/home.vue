<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control :title="['流行','新款','精选']" class="tab-control1"
                 @clickIndex="tabClick" v-show="isShowTabControl" ref="tabControl1">
    </tab-control>
    <Scroll class="content" ref="scroll" :probe-type="3" :pullUpLoad="true"
            @clickPosition="clickPosition" @pullingUp="pullingUp">
      <home-swiper :banners="banners" ref="swiper"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control :title="['流行','新款','精选']" class="tab-control" ref="tabControl" @clickIndex="tabClick"></tab-control>
      <GoodsList :goods="showGoods" :key="currentType"></GoodsList>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>
<script>
  import Scroll from "../../components/common/scroll/Scroll";

  import NavBar from "../../components/content/navbar/NavBar";
  import TabControl from "../../components/content/tabContrl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BackTop from "../../components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import Feature from "./childComps/feature";
  import {getGoodsList, getHomeMultidata} from "../../network/home";

import {debounce} from "../../common/utils";
  import {min} from "../../common/mixin";
  export default {
    name: "Home",
    mixins:[min]
    ,
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        isShow: false,
        isShowTabControl:false,
        getY:0,
        homeY:0
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
    mounted() {
      this.$bus.$on('onload', debounce(this.$refs.scroll.refresh, 3))
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res)
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getGoodsList(type) {
        const page = ++this.goods[type].page
        getGoodsList(type, page).then(res => {
          console.log(res)
          this.goods[type].list.push(...res.data.data.list)
        })
      },
      tabClick(index) {
        this.$refs.tabControl1.currentIndex=index
        this.$refs.tabControl.currentIndex=index
        const type = ['pop', 'new', 'sell']
        this.currentType = type[index]
        console.log(this.currentType)
        this.getGoodsList(this.currentType)
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 2000)
      },
      clickPosition(position) {
        // console.log(position)
        this.getY=position.y
        this.isShowTabControl=(-position.y)>=this.$refs.tabControl.$el.offsetTop?true:false
        this.isShow = (-position.y) > 1000 ? true : false
      },
      pullingUp() {
        console.log('加载')
        this.getGoodsList(this.currentType)
        this.$refs.scroll.finishPullUp()
      }
    },
    deactivated() {
      //保存y值
      this.homeY=this.getY
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.homeY,0)
      // this.homeY=0
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .tab-control {

  }
  .tab-control1{
    position:fixed;
    top: 44px;
    right: 0;
    left: 0;
    z-index: 2;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }

</style>
