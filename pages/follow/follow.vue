<template>
	<view class="follow-container">
		<view class="follow-tab">
			<view class="follow-tab-box">
				<view class="follow-tab-item" :class="{active:currentIndex===0}" @click="currentIndex=0">文章</view>
				<view class="follow-tab-item" :class="{active:currentIndex===1}" @click="currentIndex=1">作者</view>
			</view>
		</view>

		<view class="follow-list-container">
			<swiper class="follow-list-swiper" :current="currentIndex" @change="currentIndex =$event.detail.current">
				<swiper-item :class="{'no-data':articleDataNone}">
					{{articleDataNone&&'暂没有关注的文章'}}
					<ListItem :isShowLoading="isShowLoading" :articleList="articleList" v-if="articleList.length">
					</ListItem>

				</swiper-item>
				<swiper-item>
					<AuthorList :authorList="authorList" v-if="authorList.length"></AuthorList>
					<view v-if="authorDataNone" class="no-data">暂无关注的作者</view>

				</swiper-item>
			</swiper>



		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			// #ifdef MP-WEIXIN
			if (!this.$store.state.userInfo) {
				uni.redirectTo({
					url: './pages/userInfo/login/login'
				})
				return
			}
			// #endif	
			this._getFollowArticle();
			this._getAuthorList()
			uni.$on('updateArticle', () => {
				this._getFollowArticle('noLoading')
			})
			uni.$on('updateAuthor', () => {
				this._getAuthorList('noLoading')
			})
		},
		data() {
			return {
				currentIndex: 0,
				articleList: [],
				isShowLoading: false,
				articleDataNone: '',
				authorDataNone: '',
				authorList: [],
			}
		},
		methods: {
			async _getFollowArticle(isLoading) {
				const list = await this.$http.get_follow_article({
					userId: this.userInfo._id,
					isLoading
				})
				this.articleList = list;
				if (list.length) {
					this.articleDataNone = ''
				} else {
					this.articleDataNone = true;
				}
			},
			async _getAuthorList(isLoading) {

				const list = await this.$http.get_follow_author({
					userId: this.userInfo._id,
					isLoading
				});
				this.authorList = list
				if (list.length) {
					this.authorDataNone = ''
				} else {
					this.authorDataNone = true;

				}


			}

		}
	}
</script>

<style lang="scss" scoped>
	@import "./follow.scss"
</style>
