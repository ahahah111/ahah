<template>
  <div id="app">

    <router-view/>
    <!--回到顶部组件-->
  </div>
</template>

<style>
/*用来固定底部的！！！！！！！*/
*{margin: 0; padding: 0}

body{
  background-color: #f5f5f5;
  font-weight: 400;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei";
  line-height: 1.5;
}
a{
  cursor: pointer;
  text-decoration: none;
  /*动画效果*/
  transition: none 86ms ease-out;
}
html{height: 100%;}
body{min-height: 100%}
/*生成相对定位的元素，相对于其正常位置进行定位*/
body{position:relative;}

</style>
