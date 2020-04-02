import Mock from 'mockjs'
Mock.mock('http://localhost:8080/user', {
  'name': '@name',
  'email': '@email'
})
Mock.mock('http://localhost:8080/login', {
  data: {
    'token': 'afadfsdf123'
  }
})
