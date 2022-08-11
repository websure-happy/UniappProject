import ajax from '../../http.js'

// 用户登录
export const user_login = data => ajax({
  name: 'user_login',
  data
})

// 获取手机验证码
export const get_code = data => ajax({
  name: "get_code",
  data
})

/* 关注作者 */
export const update_follow_author = data => ajax({
  name: 'update_follow_author',
  data
})

/* 对当前文章进行点赞 */
export const update_compliments = data => ajax({
  name:'update_compliments',
  data
})

/* 获取关注的文章 */
export const get_follow_article = data => ajax({
  name:'get_follow_article',
  data
})

/*获取关注的作者*/
export const get_follow_author=data=>ajax({
	name:"get_follow_author",
	data
})
export const get_my_article=data=>ajax({
	name:"get_my_article",
	data
})
/*上传图片*/
export const update_feedback=data=>ajax({
	name:"update_feedback",
	data
})