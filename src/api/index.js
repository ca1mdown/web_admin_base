import axios from 'axios'
// import qs from 'qs'
import consts from '@/consts'
import router from '@/router'
import store from '@/store'

let retryCount = 0
axios.defaults.baseURL = consts.CLOUD_BASE_URL
axios.interceptors.response.use(res => {
  if (res && res.data) {
    const { errcode, errmsg } = res.data
    if (errcode === 42001 || errcode === 40001) {
      // 尝试重新登录获取access_token
      const { username, password } = store.state
      if (retryCount > 5 || !username || !password) {
        router.push({ name: 'Login' })
        window.location.reload()
        return Promise.reject(errmsg)
      }
      retryCount++
      return store.action.login(username, password).then(() => {
        // 替换url中的access_token
        const url = res.config.url
        const accessTokenStr = 'access_token'
        const startStr = url.substr(0, url.indexOf(accessTokenStr) + 1 + accessTokenStr.length)
        const endStr = url.substr(url.indexOf('/env/'))
        res.config.url = startStr + store.state.accessToken + endStr
        return axios(res.config)
      }).catch(() => {
        return Promise.reject(errmsg)
      })
    }
  }
  return res
}, error => {
  console.log(error)
})

// const callCloudFunction = (accessToken, env, name, body) => {
//   body = body || {}
//   // const qsBody = qs.stringify(body)
//   const url = `call/access_token/${accessToken}/env/${env}/name/${name}`
//   return axios.post(url, body)
// }

const api = {
  login (username, password) {
    const url = 'login'
    const body = { username, password }
    return axios.post("login", body)
  }
}

export default api
