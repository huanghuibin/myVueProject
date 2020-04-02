import axios from '../axios'

export const getMenu = data => {
  return axios({
    url: '/menu/findTree',
    method: 'post',
    data
  })
}
