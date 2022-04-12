<template>
  <el-card>
    <h3 class="me-author-name">大王叫我来巡山</h3>
    <div class="me-author-description">
      <span><i class="el-icon-location-outline"></i> &nbsp;深圳&珠海</span>
      <span><i class="el-icon-job"></i> &nbsp;&nbsp;&nbsp;队友超厉害</span>
    </div>
    <div class="me-author-tool">
      <i @click="showTool(qq)":title="qq.title" class="iconfont icon-qq"></i>
      <i @click="showTool(bilibili)":title="bilibili.title" class="iconfont icon-bilibili"></i>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'CardMe',
  data(){
    return{
      qq:{title:'QQ',message:'2387699310'},
      bilibili:{title:'哔哩哔哩',
        message:'<a target="_blank" href="https://www.bilibili.com/>"'
      }
    }
  },
  methods:{
    showTool(tool){
      this.$message({
        duration:0,
        showClose:true,
        dangerouslyUseHTMLString:true,
        message:'<strong>'+tool.message+'</strong>'
      });
    }
  }
}
</script>

<style scoped>
.me-author-name{
  text-align: center;
  font-size: 30px;
  border-bottom: 1px solid #00aaff;
}
.me-author-description{
  padding: 8px 0;
}
.me-icon-job{
  padding-left:16px;
}
.me-author-tool{
  text-align: center;
  padding-top: 10px;
}
.me-author-tool i {
  cursor: pointer;
  padding: 4px 10px;
  font-size: 30px;
}
</style>