<template>
  <el-card class="me-area":body-style="{ padding: '16px '}"><!--el-card 就是一个卡片-->

    <div class="me-articles-header">
      <a @click="view(id)" class="me-articles-title">{{title}}</a>
      <el-button v-if="weight > 0" class="me-article-icon" type="text">置顶</el-button><!--指定地按钮-->
      <!--评论数量-->
      <span class="me-pull-right me-article-count">
				<i class="me-icon-comment"></i>&nbsp;{{commentCounts}}
			</span>
      <!--查看数量-->
      <span class="me-pull-right me-article-count">
				<i class="el-icon-comment"></i>&nbsp;{{viewCounts}}
			</span>
    </div>

    <!--文章的内容-->
    <div class="me-articles-description">
      {{summary}}
    </div>
    <div class="me-articles-footer">
			<span class="me-article-author"><!--作者-->
        {{author}}
			</span>

      <el-tag class="el-tag" v-for="t in tags" :key="t.tagName" size="mini" type="success">{{t.tagName}}</el-tag>

      <span class="me-pull-right me-article-count"><!--时间-->
				<i class="el-icon-time"></i>&nbsp;{{createDate | format}}
			</span>

    </div>

  </el-card>
</template>

<script>
export default {
  name: 'ArticleItem',
  props:{
    title:String,
    weight:Number,
    id:String,
    commentCounts:Number,
    viewCounts:Number,
    summary:String,
    author:String,
    tags:Array,
    createDate:String
  },
  data(){
    return{
    }
  },
  methods:{
    view(id){
      this.$router.push({path: `/view/${id}`})//跳转到一个页面
    },


  }
}
</script>

<style scoped>
.me-articles-header{
  padding-bottom: 10px;
}

.me-articles-title{
  font-weight:600;
}

.me-article-icon{
  padding: 3px 8px;
}

.me-article-count{
  color: #ff00ff;
  padding-left: 14px;
  font-size: 13px;
}

.me-pull-right{
  float:right;
}

.me-articles-description {
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 10px;
}

.me-article-author{
  color: #aa00ff;
  padding-right: 18px;
  font-size: 13px;
}

.el-tag{
  margin-left: 6px;
  color: #ffffff;
  background-color: #ff00ff;
}
</style>