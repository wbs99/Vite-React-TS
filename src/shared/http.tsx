import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { mockSession } from "../mocks/mock";

type GetConfig = Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>
type PostConfig = Omit<AxiosRequestConfig, 'url' | 'data' | 'method'>
type PatchConfig = Omit<AxiosRequestConfig, 'url' | 'data'>
type DeleteConfig = Omit<AxiosRequestConfig, 'params'>

export class Http {
  instance: AxiosInstance
  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL })
  }
  get<R = unknown>(url: string, query?: Record<string, JSONValue>, config?: GetConfig) {
    return this.instance.request<R>({ ...config, url, params: query, method: 'get' })
  }
  post<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PostConfig) {
    return this.instance.request<R>({ ...config, url, data, method: 'post' })
  }
  patch<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PatchConfig) {
    return this.instance.request<R>({ ...config, url, data, method: 'patch' })
  }
  delete<R = unknown>(url: string, query?: Record<string, string>, config?: DeleteConfig) {
    return this.instance.request<R>({ ...config, url, params: query, method: 'delete' })
  }
}

const mock = (response: AxiosResponse) => {
  if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1' && location.hostname !== '192.168.3.57') { return false }
  switch (response.config?._mock) {
    case 'session':
      [response.status, response.data] = mockSession(response.config)
      return true
  }
  return false
}


export const http = new Http('/api/v1')

// set header
http.instance.interceptors.request.use(config => {
  const jwt = localStorage.getItem('jwt')
  if (jwt) { config.headers!.Authorization = `Bearer ${jwt}` }
  if (config._autoLoading === true) { console.log('加载中') }
  return config
})
// loading
http.instance.interceptors.response.use((response) => {
  if (response.config._autoLoading === true) { console.log('加载完成') }
  return response
}, (error: AxiosError) => {
  if (error.response?.config._autoLoading === true) { console.log('加载完成') }
  throw error
})
// mock
http.instance.interceptors.response.use((response) => {
  mock(response)
  if (response.status >= 400) { throw { response } } else { return response }
}, (error) => {
  mock(error.response)
  if (error.response.status >= 400) { throw error } else { return error.response }
})
http.instance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response?.status === 429) { alert('请求太频繁') }
    throw error
  }
)



// use demo
// const response = await http.post<{ jwt: string }>('/session', { email: '1134954328@qq.com', code: '' }, { _autoLoading: true })
//   .catch((error: any) => console.log(error))


// const response2 = await http.get<{ resources: Tag[] }>('/tags', {
//   kind: 'expenses',
//   _mock: 'tagIndex'
// }).catch((error: any) => console.log(error))