import { getToken } from '@/utils/auth'
const mixin = {
  data() {
    return {
      /* File upload related*/
      fileListMixin: [],
      chooseFileNameMixin: '',
      /* Multi-environment configuration and token information*/
      commonValueMixin: '',
      modalShowTitleMixin: '',
      VITE_APP_IMAGE_URL_PRE: '', // image prefix address
      VITE_APP_BASE_URL: '', // the requested url address
      VITE_APP_BASE_WS_URL: '', // the requested url address
      accessTokenMixin: '', // request header token
      userBaseInfoMixin: {}, // User Info
      /* time point correlation*/
      todayTimeMixin: '',
      currentTimeMixin: '',
      todayTimeMixinLast: '',
      yesterdayTimeMixin: null,
      beforeThreeDateTimeMixin: ''
    }
  },
  created() {
    /* Get the url connection domain name for multi-platform migration*/
    const localUrl = window.location.href.slice(0, window.location.href.indexOf('/', 9) + 1)
    const socketUrl = localUrl.replace(/http|https/gi, 'ws')
    // Read the data in the .env environment
    this.VITE_APP_IMAGE_URL_PRE = import.meta.env.VITE_APP_BASE_URL
    this.VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL
    this.VITE_APP_BASE_WS_URL =
      import.meta.env.VITE_APP_ENV === 'serve' ? import.meta.env.VITE_APP_BASE_WS_URL : socketUrl
    // Get token and basic personal information
    this.accessTokenMixin = getToken()
    this.userBaseInfoMixin = JSON.parse(localStorage.getItem('L_userBaseInfo'))
    /* get time point*/
    this.todayTimeMixin = this.$momentMini().startOf('day').format('YYYY-MM-DD HH:mm:ss')
    this.currentTimeMixin = this.$momentMini(new Date()).format('YYYY-MM-DD HH:mm:ss')
    this.todayTimeMixinLast = this.$momentMini().endOf('day').format('YYYY-MM-DD HH:mm:ss')
    this.beforeThreeDateTimeMixin = this.$momentMini().add(-3, 'days').format('YYYY-MM-DD HH:mm:ss')
    this.yesterdayTimeMixin = this.$momentMini().add(-1, 'days').format('YYYY-MM-DD HH:mm:ss')
  },
  methods: {
     /* Array operation related api*/
     /*
      * filter array by key name
      * arr: array
      * key: the total key of the value object
     * */
    filterArrMixin(arr, key) {
      const hash = {}
      return arr.reduce((ss, item) => {
        hash[item[key]] ? '' : (hash[item[key]] = ss.push(item))
        return ss
      }, [])
    },
    /*
     * Clear the empty parameter item
     * objParam: incoming parameters
     * */
    clearParamsIsNullMixin(objParam) {
      const obj = Object.keys(objParam)
      obj.forEach((fItem) => {
        if (objParam[fItem] === '' || objParam[fItem] === null || objParam[fItem] === undefined) delete objParam[fItem]
      })
      return objParam
    },

    /*File Upload*/
    handleChangeMixin(file, fileListMixin) {
      console.log('file, fileListMixin', file, fileListMixin)
      this.fileListMixin = fileListMixin
    },
    goUploadFileMixin() {
      this.$refs.refSettingFile.click()
    },

    sleepMixin(time) {
      return new Promise((resolve) => {
        const timer = setTimeout(() => {
          clearTimeout(timer)
          resolve(true)
        }, time)
      })
    },
    resetDataMixin(form) {
      Object.keys(form).forEach((sItem) => {
        form[sItem] = ''
      })
    },
    reshowDataMixin(row, form) {
      Object.keys(row).forEach((fItem) => {
        Object.keys(form).forEach((sItem) => {
          if (fItem === sItem) {
            form[sItem] = row[sItem]
          }
        })
      })
    }
  }
}

export default mixin
