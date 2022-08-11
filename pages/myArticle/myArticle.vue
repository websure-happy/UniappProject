<template>
	<view>
		<ListCard :item="item" v-for="item in articleList" :key="item._id"></ListCard>
		<view class="no-data" v-if="!articleList.length">
			你还没有发布过文章
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._getMyArticle()
		},
		data() {
			return {
				articleList: []
			};
		},
		methods:{
			async _getMyArticle() {
				const list = await this.$http.get_my_article({
					userId: this.userInfo._id
				});
				this.articleList = list
			}
		}
	}
</script>

<style lang="scss">
.no-data {
  height: 400rpx;
  line-height: 400rpx;
  width: 100%;
  text-align: center;
  font-size: 28rpx;
  color: #666;
}
</style>
