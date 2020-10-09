<template>
  <div class="detal-Goods-info">
    <div class="top">
      <p>{{goods.title}}</p>
    </div>
    <div class="center">
      <span>{{goods.realPrice}}</span>
      <del>{{goods.oldPrice}}</del>
      <span></span>
    </div>
    <div class="bottom">
      <span v-for="item in goods.columns" class="bottom-item">{{item}}</span>
    </div>
    <div class="last-bottom">
      <span v-for="item in goods.services" class="last-bottom-item">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goods: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .detal-Goods-info {
  }

  .top {
    font-size: 14px;
    color: black;
    margin: 10px 0;
    padding-left: 3px;
    padding-left: 3px;
  }
.center{
  margin-bottom: 5px;
  padding-left: 3px;
}
  .bottom {
    display: flex;
  }

  .bottom-item {
    font-size: 12px;
    text-align: center;
    flex: 1;
  }
  .last-bottom{
    border-top: 2px solid #F4F4F4;
    border-bottom: 2px solid #F4F4F4;
    padding: 15px 0;
    font-size: 12px;
    display: flex;
  }
  .last-bottom-item{
    flex: 1;
    text-align: center;
  }
</style>
