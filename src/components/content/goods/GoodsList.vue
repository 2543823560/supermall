<template>
<div class="goods-list">
<goods-list-item v-for="good in goods" :good="good">
</goods-list-item>
</div>
</template>

<script>
    import GoodsListItem from "./GoodsListItem";
    export default {
        name: "GoodsList",
      components: {GoodsListItem},
      props:{
        goods:{
          type:Array,
          default:[]
        }
      }
    }
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around ;
}
</style>
