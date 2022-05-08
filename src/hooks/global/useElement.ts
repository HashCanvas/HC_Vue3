import { ElLoading, ElNotification, ElMessage, ElMessageBox } from 'element-plus'
const useElementExample = () => {
  /* element Form verification related*/
  // 密码必须为6-18位字母、数字
  const passwordValid: any = (rule: any, value: any, callback: any) => {
    if (!/^(?![^a-zA-Z]+$)(?!\D+$)/.test(value)) {
      callback(new Error('Password must be 6-18 alphanumeric characters'))
    } else {
      callback()
    }
  }
  // integer greater than 0
  const upZeroInt = (rule: any, value: any, callback: any) => {
    if (!/^\+?[1-9]\d*$/.test(value)) {
      callback(new Error('number greater than 0'))
    } else {
      callback()
    }
  }
  const upZeroIntCanNull = (rule: any, value: any, callback: any) => {
    if (!value) {
      callback()
    } else {
      if (!/^\+?[1-9]\d*$/.test(value)) {
        callback(new Error('number greater than 0'))
      } else {
        callback()
      }
    }
  }
  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      callback()
    }
  }

  const state = reactive({
    /* table*/
    tableData: [],
    rowDeleteIdArr: [],
    loadingId: null,
    /* form*/
    formModel: {},
    subForm: {},
    searchForm: {},
    /* form validation*/
    formRules: {
      isNotNull: [{ required: true, message: 'This field cannot be empty', trigger: 'blur' }],
      isNotNullSecond: [{ required: true, message: 'This field cannot be empty', trigger: 'blur' }],
      mLength8: [
        { required: true, message: 'This field cannot be empty', trigger: 'blur' },
        { max: 8, message: 'Up to 8 charaters', trigger: 'blur' }
      ],
      minLength7: [
        { required: true, message: 'This field cannot be empty', trigger: 'blur' },
        { min: 7, message: 'Minimum 7 characters', trigger: 'blur' }
      ],
      length17: [
        { required: true, message: 'This field cannot be empty', trigger: 'blur' },
        { min: 17, max: 17, message: '17 characters long', trigger: 'blur' }
      ],
      desc: [{ validator: validatePass, trigger: 'blur' }],
      upZeroInt: [{ validator: upZeroInt, trigger: 'blur' }],
      upZeroIntCanNull: [{ validator: upZeroIntCanNull, trigger: 'blur' }],
      passwordValid: [{ validator: passwordValid, trigger: 'blur' }]
    },
    /* time packing related*/
    datePickerOptions: {
      disabledDate: (time: any) => {
        return time.getTime() < Date.now() - 86400000
      }
    },
    startEndArr: [],
    startEndArrSub: [],
    /* dialog related*/
    dialogTitle: 'Add to',
    detailDialog: false,
    isDialogEdit: false,
    dialogVisible: false,
    tableLoading: false,
    /* Cascading correlation*/
    cascaderKey: 1,
    SetKesDept: {
      value: 'id',
      expandTrigger: 'hover',
      label: 'label',
      children: 'children'
    },
    SetKesDeptNoStrictly: {
      value: 'id',
      expandTrigger: 'hover',
      label: 'label',
      children: 'children',
      checkStrictly: true
    },
    cascaderOptionsOne: [],
    cascaderOptions: [],
    /* tree correlation*/
    treeData: [],
    defaultProps: {
      children: 'children',
      label: 'label'
    }
  })

  /* cascade*/
  const cascaderKey: any = ref(null)
  const casHandleChange = () => {
    // Solve the current cascading selector search input error problem
    cascaderKey.value += cascaderKey.value
  }
  /*
   * notification popup
   * message: the content of the notification
   * type: notification type
   * duration: notification display time (ms)
   * */
  const elMessage = (message?: string, type?: any) => {
    ElMessage({
      showClose: true,
      message: message || 'success',
      type: type || 'success',
      center: false
    })
  }
  /*
    * loading loading box
    * Closed by loadingId.close() after calling
   * */
  let loadingId: any = null
  const elLoading = () => {
    loadingId = ElLoading.service({
      lock: true,
      text: 'Data loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.1)'
    })
  }
  /*
    * hint
    * message: prompt content
    * type: prompt type
    * title: prompt title
    * duration: prompt duration (ms)
    * */
  const elNotify = (message?: string, type?: any, title?: string, duration?: number) => {
    ElNotification({
      title: title || 'hint',
      type: type || 'success',
      message: message || 'Please pass in a reminder message',
      position: 'top-right',
      duration: duration || 2500,
      offset: 40
    })
  }
  /*
    Confirmation popup (no cancel button)
  * title: the title of the prompt
  * message: the content of the prompt
  * return Promise
  * */
  const elConfirmNoCancelBtn = (title?: string, message?: string) => {
    return ElMessageBox({
      message: message || 'Are you sure you want to delete',
      title: title || 'confirmation box',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      showCancelButton: false,
      type: 'warning'
    })
  }
  /*
    * Confirmation popup
    * title: the title of the prompt
    * message: the content of the prompt
    * return Promise
    * */
  const elConfirm = (title?: string, message?: string) => {
    return ElMessageBox({
      message: message || 'Are you sure you want to delete',
      title: title || 'Confirmation box',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    })
  }

  return {
    casHandleChange,
    elMessage,
    elLoading,
    elNotify,
    elConfirmNoCancelBtn,
    elConfirm,
    ...toRefs(state)
  }
}

export const useElement = useElementExample

export default useElementExample
