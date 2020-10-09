<template>
<div class="con" ref="a">
  <button ref="f">按钮一</button>
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
      this.$refs.f.addEventListener('click',this.debounce(this.fun,1000))
    },
    methods:{
      debounce(fn, wait) {
        console.log(1222)
        console.log(timeout)
        var timeout = null;
        return function () {
          if (timeout !== null) clearTimeout(timeout);
          timeout = setTimeout(fn, wait);
        }
      },
      fun(){
        console.log(1111)
      }
    }
  }

</script>

<style scoped>
.con{
  height: 300px;
  background-color: red;
}
</style>
