<!--相当于码神之路的Home.vue-->
<template>
	<div id="kuangjia" class="me-container" >
		<el-container>

			<base-header :activeIndex="activeIndex"></base-header>

			<router-view class="me-container"/>

      <base-footer v-show="footerShow"></base-footer>

		</el-container>
	</div>
</template>

<script>
import BaseHeader from "@/components/common/BaseHeader";
import BaseFooter from "@/components/common/BaseFooter";



	export default{
		name:'KuangJia',
		data(){
			return {
				activeIndex:'/',////也就是说。刚进来的时候是首页///默认路径
        footerShow:true////就是底部显示的意思
			}
		},
		components:{
      BaseFooter,
			'base-header':BaseHeader,//重命名
      'base-footer':BaseFooter
		},
		beforeRouteEnter(to,from,next){
			next(vm =>{//就是切换顶部四个部分的操作，例如，文章之类的
				vm.activeIndex = to.path//如果切换了就可以赋值不同的路径
			})
		},
    beforeRouteUpdate(to,from,next) {
      if(to.path == '/'){///就是，显示在'/'首页的时候，就显示底部
          this.footerShow = true
    }else {
        this.footerShow = false//不在首页，底部就不显示
      }
      this.activeIndex = to.path
      next()
    }
	}
</script>

<style>
.me-container{
  margin: 100px auto 140px;
}
</style>