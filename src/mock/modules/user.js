// 获取用户信息
export function getUser () {
  return {
    url: 'http://localhost:8080/user',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'data': {
        'id': '@increment',
        'name': '@name', // 随机生成姓名
        'email': '@email', // 随机生成姓名
        'age|10-20': 12
        // 其他数据
      }
    }
  }
}
/*
 * 用户管理模块
 */

// 保存
export function save () {
  return {
    url: 'http://localhost:8080/user/save',
    type: 'post',
    data: {
      'code': 200,
      'msg': null,
      'data': 1
    }
  }
}// 删除
export function del () {
  return {
    url: 'http://localhost:8080/user/delete',
    type: 'post',
    data: {
      'code': 200,
      'msg': null,
      'data': 1
    }
  }
}
// 分页查询
let findPageData = {
  'code': 200,
  'msg': null,
  'data': {}
}
let pageNum = 3
let pageSize = 8
let totalSize = 42
let totalPages = 9
findPageData.data.pageNum = pageNum
findPageData.data.pageSize = pageSize
findPageData.data.totalSize = totalSize
findPageData.data.totalPages = totalPages
let content = []
for (let i = 0; i < pageSize; i++) {
  let obj = {}
  obj.userId = i + 1
  obj.userName = 'kitty' + (i + 1)
  obj.password = '9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d'
  obj.salt = 'YzcmCZNvbXocrsz9dm8e'
  obj.email = 'kitty' + (i + 1) + '@qq.com'
  obj.mobile = '18688982323'
  obj.status = 1
  obj.deptId = 12
  obj.deptName = 'Dev'
  content.push(obj)
}
findPageData.data.content = content
// 分页查询
export function findPage () {
  return {
    url: 'http://localhost:8080/user/findPage',
    type: 'post',
    data: findPageData
  }
}
