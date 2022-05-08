import axios from 'axios'
import router from '@/router'
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus'
import { getToken, setToken } from '@/utils/auth'
import { AxiosConfigTy, AxiosReqTy, ObjTy } from '~/common'
import { useUserStore } from '@/store/user'
let reqConfig: any
let loadingE: any

const service: any = axios.create()

// request interception
service.interceptors.request.use(
  (request: AxiosReqTy) => {
    // token setting
    request.headers['AUTHORIZE_TOKEN'] = getToken()
    /* download file*/
    if (request.isDownLoadFile) {
      request.responseType = 'blob'
    }
    /* upload file*/
    if (request.isUploadFile) {
      request.headers['Content-Type'] = 'multipart/form-data'
    }
    reqConfig = request
    if (request.bfLoading) {
      loadingE = ElLoading.service({
        lock: true,
        text: 'Data loading',
        // spinner: 'el-icon-ElLoading',
        background: 'rgba(0, 0, 0, 0.1)'
      })
    }
    /*
     *params will be spliced to the url
     * */
    if (request.isParams) {
      request.params = request.data
      request.data = {}
    }
    return request
  },
  (err: any) => {
    Promise.reject(err)
  }
)
// 响应拦截
service.interceptors.response.use(
  (res: any) => {
    if (reqConfig.afHLoading && loadingE) {
      loadingE.close()
    }
    // 如果是下载文件直接返回
    if (reqConfig.isDownLoadFile) {
      return res
    }
    const { flag, msg, isNeedUpdateToken, updateToken, code } = res.data
    //更新token保持登录状态
    if (isNeedUpdateToken) {
      setToken(updateToken)
    }
    const successCode = '0,200,20000'
    if (successCode.includes(code)) {
      return res.data
    } else {
      if (code === 403) {
        ElMessageBox.confirm('please login again', {
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          const userStore = useUserStore()
          userStore.resetState().then(() => {
            router.push({ path: '/login' })
          })
        })
      }
      if (reqConfig.isAlertErrorMsg) {
        ElMessage({
          message: msg,
          type: 'error',
          duration: 2 * 1000
        })
      }
      //return error message
      //If it is not caught, go to unhandledrejection for collection
      //Note: If there is no return, it will be put back into the request method. Then, the returned res is undefined
      return Promise.reject(res.data)
    }
  },
  (err: any) => {
    /*httpError handling, handling cross-domain，404，401，500*/
    if (loadingE) loadingE.close()
    ElMessage({
      message: err,
      type: 'error',
      duration: 2 * 1000
    })
    //If it is cross domain
    //Network Error,cross origin
    const errObj: ObjTy = {
      msg: err.toString(),
      reqUrl: reqConfig.baseURL + reqConfig.url,
      params: reqConfig.isParams ? reqConfig.params : reqConfig.data
    }
    return Promise.reject(JSON.stringify(errObj))
  }
)

export function axiosReq({
  url,
  data,
  method,
  isParams,
  bfLoading,
  afHLoading,
  isUploadFile,
  isDownLoadFile,
  baseURL,
  timeout,
  isAlertErrorMsg = true
}: AxiosConfigTy): any {
  return service({
    url: url,
    method: method ?? 'get',
    data: data ?? {},
    isParams: isParams ?? false,
    bfLoading: bfLoading ?? false,
    afHLoading: afHLoading ?? true,
    isUploadFile: isUploadFile ?? false,
    isDownLoadFile: isDownLoadFile ?? false,
    isAlertErrorMsg: isAlertErrorMsg,
    baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL,
    timeout: timeout ?? 15000
  })
}

export default axiosReq
