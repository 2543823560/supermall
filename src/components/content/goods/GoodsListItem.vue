<template>
<div class="goods-list-item">
<div>
  <img :src="good.show.img"/>
  <div class="goods-info">
    <p>{{good.title}}</p>
    <span class="price">{{good.price}}</span>
    <span class="collect">{{good.cfav}}</span>
  </div>
</div>
</div>
</template>
<script>
    export default {
        name: "GoodsListItem",
      props:{
          good:{
            type:Object,
            default:{}
          }
      }
    }
</script>

<style scoped>
.goods-list-item{
  padding-bottom: 10px;
  width: 48%;
}
.goods-list-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info{
   font-size: 12px;
  text-align: center;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
</style>
