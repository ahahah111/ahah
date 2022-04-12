<template>
  <scroll-page class="scroll-page"
      :loading = "loading"
      :offset="offset"
      :no-data="noData"
      @load="load"><!--绑定事件-->
    <ArticleItem class="ArticleItem"
        v-for="article in articles"
        v-bind="article"
        :key="article.id">
    </ArticleItem>
  </scroll-page>
</template>


<script>
import ScrollPage from "@/components/scrollpage/xialaIndex";
import ArticleItem from "@/components/article/ArticleItem"
export default{
  name:"ArticleScrollPage",
  data(){
    return{
      loading:false,
      noData:false,
      offset:0,
      // articles:[
      //   {
      //     id:"1",
      //     title:"标题1标题1标题1",
      //     weight:1,
      //     commentCounts:123,
      //     viewCounts:123,
      //     summary:"概要11",
      //     author:"作者",
      //     tags:[{"tagName":"Vue"}],
      //     createDate:"111111"//创建时间
      //   },
      //   {
      //     id:"2",
      //     title:"标题2",
      //     weight:2,
      //     commentCounts:123,
      //     viewCounts:123,
      //     summary:"概要22",
      //     author:"作者",
      //     tags:[{"tagName":"Vue"}],
      //     createDate:"222"
      //   },
      //   {
      //     id:"3",
      //     title:"标题3",
      //     weight:3,
      //     commentCounts:123,
      //     viewCounts:123,
      //     summary:"概要33",
      //     author:"作者",
      //     tags:[{"tagName":"Vue"}],
      //     createDate:"222"
      //   },
      //   {
      //     id:"4",
      //     title:"标题1",
      //     weight:1,
      //     commentCounts:123,
      //     viewCounts:123,
      //     summary:"概要11",
      //     author:"作者",
      //     tags:[{"tagName":"Vue"}],
      //     createDate:"111"
      //   },
      //   {
      //     id:"5",
      //     title:"标题1",
      //     weight:1,
      //     commentCounts:123,
      //     viewCounts:123,
      //     summary:"概要11",
      //     author:"作者",
      //     tags:[{"tagName":"Vue"}],
      //     createDate:"111"
      //   },
      //   {
      //     id:"6",
      //     title:"标题1",
      //     weight:1,
      //     commentCounts:123,
      //     viewCounts:123,
      //     summary:"概要11",
      //     author:"作者",
      //     tags:[{"tagName":"Vue"}],
      //     createDate:"111"
      //   }
      // ]
      articles:[],
      //分页信息
      innerPage:{
        id:1,
        // page:1,
        // pageSize:10
      }
    }
  },
  created(){
    this.getArticles();//调用
  },
  methods:{
    load(){
      //如果触发分页，需要调用接口加载文章列表
      alert("触发分页");
      this.getArticles();
    },
    getArticles(){                                           //////url统一资源定位器，即网址
      this.loading = true;                                   //////res.data表示post请求返回的数据
      // this.axios.post("http://120.78.167.231/api/user/newArticles",this.innerPage).then((res) =>{
        this.postRequest('/user/articleDetails',this.innerPage).then(res=>{//////res表示post请求返回的结果
        //Result(success,msg,data)
        if(res.data.success){//表示post请求成功了
          if(res.data.data.length <= 0){
            this.noData = true;
          }                                                   ///res.data.data后台列表返回的文章数据
          this.articles = this.articles.concat(res.data.data);//需要concat是因为可能数据太多，数据是分页过来的
        }else{
          this.$message.error(res.data.msg);
        }
      }).catch((err) => {///捕捉错误信息，表示post请求失败
        this.$message.error("发生了错误！");
      }).finally(()=>{
        this.loading = false;
      })
      this.noData = false;
      this.loading = false;////以上的！！！！
    }
  },
  components:{
    "scroll-page":ScrollPage,
    ArticleItem
  }
}
</script>

<style scoped>
.el-card{
  border-radius: 0;
}
.el-card:not(:first-child){
  margin-top:10px;
}
</style>
