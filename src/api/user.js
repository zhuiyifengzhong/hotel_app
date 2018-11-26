import request from '@/utils/request'

const URL = 'user'

export function userLogin(username, password) {
  return request({
    url: URL + '/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getUserInfoByUsername(username) {
  return request({
    url: URL + '/withUsername',
    method: 'post',
    data: {
      username
    }
  })
}
