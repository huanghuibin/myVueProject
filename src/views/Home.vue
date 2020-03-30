<template>
    <div class="page">
      <H2>Home page</H2>
      <el-button @click="test()">11</el-button>
      <el-button @click="mock()">mockTest</el-button>
    </div>
</template>

<script>
import axios from 'axios'
import mock from '@/mock/mock.js'
export default {
  name: 'Home',
  methods: {
    test () {
      // eslint-disable-next-line no-undef
      axios.get('http://localhost:8081/#/')
        .then(function (res) {
          alert(res.data)
        }).catch(function (res) {
          alert(res)
        })
    },
    mock () {
      // eslint-disable-next-line no-undef
      axios.get('http://localhost:8080/user')
        .then(function (res) {
          alert(JSON.stringify(res.data))
        }).catch(function (res) {
          alert(res)
        })
    }
  }
}
</script>

<style scoped>

</style>
