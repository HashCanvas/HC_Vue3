import { getToken } from '@/utils/auth'
import momentMini from 'moment-mini'
import { ObjTy } from '~/common'

type stateTy = {
  totalPage: number
  searchForm: ObjTy
  /* File upload related*/
  fileList: Array<any>
  chooseFileName: string
  /* Multi-environment configuration and token information*/
  commonValue: string
  modalShowTitle: string
  VITE_APP_IMAGE_URL_PRE: string // image prefix address
  VITE_APP_BASE_URL: string // the requested url address
  VITE_APP_BASE_WS_URL: string // the requested url address
  accessToken: string // request header token
  userBaseInfo: ObjTy // User Info
  startEndArr: ObjTy // User Info
  /* time point correlation*/
  todayTime: string
  currentTime: string
  todayTimeLast: string
  yesterdayTime: string
  beforeThreeDateTime: string
}

export const useCommonExample = () => {
  const state = reactive<stateTy>({
    totalPage: 0,
    searchForm: {},
    /* File upload related*/
    fileList: [],
    chooseFileName: '',
    /* Multi-environment configuration and token information*/
    commonValue: '',
    modalShowTitle: '',
    VITE_APP_IMAGE_URL_PRE: '', // Multi-environment configuration and token information
    VITE_APP_BASE_URL: '', // the requested url address
    VITE_APP_BASE_WS_URL: '', // the requested url address
    accessToken: '', // request header token
    userBaseInfo: {}, // User Info
    startEndArr: [],
    /* time point correlation*/
    todayTime: '',
    currentTime: '',
    todayTimeLast: '',
    yesterdayTime: '',
    beforeThreeDateTime: ''
  })
  // Read the data in the .env environment
  state.VITE_APP_IMAGE_URL_PRE = import.meta.env.VITE_APP_BASE_URL as string
  state.VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL as string
  // Get token and basic personal information
  state.accessToken = getToken() as string
  /* get time point*/
  state.todayTime = momentMini().startOf('day').format('YYYY-MM-DD HH:mm:ss')
  state.currentTime = momentMini(new Date()).format('YYYY-MM-DD HH:mm:ss')
  state.todayTimeLast = momentMini().endOf('day').format('YYYY-MM-DD HH:mm:ss')
  state.beforeThreeDateTime = momentMini().add(-3, 'days').format('YYYY-MM-DD HH:mm:ss')
  state.yesterdayTime = momentMini().add(-1, 'days').format('YYYY-MM-DD HH:mm:ss')

  /*
   * Empty parameter items
   * objParam: incoming parameters...
   * */
  // const clearParamsIsNull = (objParam: ObjTy) => {
  //   const obj = Object.keys(objParam)
  //   obj.forEach((fItem) => {
  //     if (objParam[fItem] === '' || objParam[fItem] === null || objParam[fItem] === undefined) delete objParam[fItem]
  //   })
  //   return objParam
  // }

  const sleep = (time: number): Promise<null> => {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        resolve(null)
      }, time)
    })
  }

  return {
    sleep,
    ...toRefs(state)
  }
}

export const useCommon = useCommonExample

export default useCommonExample
