import axios from '../axios'

export const findNavTree = (params) => {
  return axios({
    url: '/menu/findNavTree',
    method: 'get',
    params
  })
}
