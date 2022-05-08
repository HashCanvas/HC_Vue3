import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/getMapInfo',
    method: 'get',
    response: () => {
      return {
        code: 0,
        title: 'mock request test'
      }
    }
  }
] as MockMethod[]
