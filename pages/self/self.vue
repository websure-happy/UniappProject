<template>
  <view>
    <!-- 当用户为登录状态时进行显示 -->
    <view v-if="userInfo" class="my-header">
      <view class="my-header-background">
        <image :src="userInfo.avatar" mode="aspectFill"></image>
      </view>
      <view class="my-header-logo">
        <view class="my-header-logo-box">
          <image :src="userInfo.avatar" mode="aspectFill"></image>
        </view>
        <text class="user-name">{{userInfo.author_name}}</text>
      </view>
      <view class="my-header-info">
        <view class="my-header-info-box">
          <text class="my-header-info-title">被关注</text>
          <text>{{userInfo.follow_count}}</text>
        </view>
        <view class="my-header-info-box">
          <text class="my-header-info-title">粉丝</text>
          <text>{{userInfo.fans_count}}</text>
        </view>
        <view class="my-header-info-box">
          <text class="my-header-info-title">积分</text>
          <text>{{userInfo.integral_count || 0}}</text>
        </view>
      </view>
    </view>

    <view class="my-content">
      <view v-if="!userInfo" class="my-content-list" @click="goLoginPage">
        <view class="my-content-list-title">
          <image class="company-logo" src="../../static/img/logo.jpeg" mode="aspectFill"></image>
          <text>HI，您尚未登录,请点击登录</text>
        </view>
        <uni-icons type="arrowright" size="14" color="#666"></uni-icons>
      </view>
      <view class="my-content-list" @click="goMyArticlePage">
        <view class="my-content-list-title">
          <uni-icons class="icons" type="contact" size="16" color="#666"></uni-icons>
          <text>我的文章</text>
        </view>
        <uni-icons type="arrowright" size="14" color="#666"></uni-icons>
      </view>
      <view class="my-content-list">
        <view class="my-content-list-title" @click="goFeedBack">
          <uni-icons class="icons" type="help" size="16" color="#666"></uni-icons>
          <text>意见反馈</text>
        </view>
        <uni-icons type="arrowright" size="14" color="#666"></uni-icons>
      </view>

      <!-- #ifdef APP-PLUS -->
      <view class="my-content-list" @click="haveNewVersion&&_getNewVersion()">
        <view class="my-content-list-title">
          <uni-icons class="icons" type="paperclip" size="16" color="#666"></uni-icons>
          <view class="version-container">
            <text>
              当前版本
              <text v-if="haveNewVersion" class="new-version-tip">(点击下载最新版本)</text>
            </text>
            <text class="version">{{currentVersion}}</text>
          </view>
        </view>
        <uni-icons type="arrowright" size="14" color="#666"></uni-icons>
      </view>
      <!-- #endif -->
      <button v-if="userInfo" type="warn" class="sign-out" @click="signOut">退出</button>
    </view>

  </view>
</template>

<script>
	export default {
		data() {
			return {
				currentVersion: '1.0.0',
				haveNewVersion: false
			}
		},
		methods: {

			goLoginPage() {
				uni.navigateTo({
					url: '/pages/userInfo/login/login'
				})

			},
			signOut() {
				this.$store.commit('updateUserInfo', null);
				uni.navigateTo({
					url: '/pages/index/index'
				})
			},
			goMyArticlePage(){
				uni.navigateTo({
					url:"/pages/myArticle/myArticle"
				})
			},
			goFeedBack(){
				uni.navigateTo({
					url:"/pages/feedBack/feedBack"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./css/index.scss"
</style>
