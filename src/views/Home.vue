<!--相当于码神之路的views的index.vue-->
<template>
  <div id="home">
    <el-container class="el-container">
      <el-main class="me-articles">
        <ArticleScrollPage></ArticleScrollPage>
      </el-main>
      <el-aside class="el-aside">
        <CardMe></CardMe>
        <card-tag tags="hotTags"></card-tag>
      </el-aside>

    </el-container>
  </div>
</template>


<script>
import ArticleItem from "@/components/article/ArticleItem";
import ArticleScrollPage from "@/components/common/ArticleScrollPage";
import CardMe from "@/components/card/CardMe";
import CardTag from "@/components/card/CardTag";
// import {getHotTags} from "@/api/tag";

export default {
  name: "Home",
  components:{
    ArticleScrollPage,
    ArticleItem,
    CardMe,
    "card-tag":CardTag
  },
  data(){
    return{
      // hotTags:[]
    }
  },
  created() {
    // this.getHotTags();//调用hotHags数组里的值
  },
  methods:{
    getHotTags(){
      //alert(1)
      //发起http请求，请求后端的数据
      getHotTags().then((res)=>{
        //res.data = Result (success,msg,data)注意区别
        if (res.data.success){
          this.hotTags = res.data.data;
        }else{
          this.$message.error(res.data.msg);
        }
      }).catch((error)=>{
        this.$message.error("系统错误");
      }).final(()=>{
      })
    }
  }
}
</script>



<style scoped>
.el-container{
  width: 960px;
}
.el-aside{
  margin-left: 20px;
  width: 260px;
}
.me-articles{
  padding: 0px;
  line-height: 16px;
}

</style>