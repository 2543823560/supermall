<template>
    <div id="detail">
      <detail-nav-bar :nav-bar-text="navBarText" class="detail-nav-bar"></detail-nav-bar>
<!--      <Scroll class="scroll">-->
        <detail-swiper :topImages="topImages" class="detail-swiper"></detail-swiper>

        <detail-goods-info :goods="goods"></detail-goods-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-image-info :detailInfo="detailInfo" :imageList="imageList"></detail-image-info>

        <detail-params-info :paramInfo="paramInfo"></detail-params-info>
        <detail-comment-info></detail-comment-info>
      <GoodsList :goods="showGoods" :key="currentType"></GoodsList>
<!--      </Scroll>-->
    </div>
</template>

<script>
    import DetailNavBar from "./detailComps/DetailNavBar";
    import DetailSwiper from "./detailComps/DetailSwiper";
    import {detailGood} from "../../network/detail";

    import {Goods,Shop,GoodsParam} from "network/detail";
    import DetailGoodsInfo from "./detailComps/DetailGoodsInfo";
    import DetailShopInfo from "./detailComps/DetailShopInfo";
    import Scroll from "../../components/common/scroll/Scroll";
    import DetailCommentInfo from "./detailComps/DetailCommentInfo";
    import DetailImageInfo from "./detailComps/DetailImageInfo";
    import DetailParamsInfo from "./detailComps/DetailParamsInfo";
    export default {
      name: "Detail",
      components: {
        DetailParamsInfo,
        DetailImageInfo,
        DetailCommentInfo, Scroll, DetailShopInfo, DetailGoodsInfo, DetailSwiper, DetailNavBar},
      data(){
          return{
            navBarText:['商品','参数','评论','推荐'],
            iid:null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            imageList:[]
          }
      },
      created() {
        this.iid=this.$route.query.iid
        console.log(this.iid)
        this.detailGood(this.iid)
      },
      methods:{
        detailGood(iid){
          detailGood(iid).then(res=>{
            // 1.获取顶部的图片轮播数据
            console.log(res);
            const data = res.data.result;
            this.topImages = data.itemInfo.topImages
            // 2.获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            // console.log(this.goods)
            // // 3.创建店铺信息的对象
            // console.log(data.shopInfo)
            this.shop = new Shop(data.shopInfo)
            // console.log(this.shop)
            //
            // // 4.保存商品的详情数据
            this.detailInfo = data.detailInfo;
            this.imageList=this.detailInfo.detailImage[0].list
            console.log(this.detailInfo)
            //
            // // 5.获取参数的信息
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
            console.log(this.paramInfo)
          })
        }
      }
    }
</script>

<style scoped>
.detail-nav-bar{
  position:fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 4;
  background-color: white;
}
  .scroll{
    background-color: white;
    position: fixed;
    right: 0;
    left: 0;
    top: 44px;
    bottom: 0;
    z-index: 2;
  }
</style>
