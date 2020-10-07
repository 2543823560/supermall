<template>
<div class="con" ref="a">
  <ul>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>
    <li>1111</li>



  </ul>
</div>
</template>

<script>

  import Scroll from "../../components/common/scroll/Scroll";
  import  scroll from 'better-scroll'
  export default {
    name: "Category",
    mounted() {
      new scroll(this.$refs.a,{

      })
    }
  }

</script>

<style scoped>
.con{
  height: 300px;
  background-color: red;
}
</style>
