import * as login from './moudules/login'
import * as user from './moudules/user'
import * as menu from './moudules/menu'
/*
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */
// 默认全部导出
export default {
  login,
  user,
  menu
}
