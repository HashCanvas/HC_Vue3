const mixin = {
  data() {
    /* element form verification related */
     // The password must be 6-18 letters and numbers to upload
    const passwordValid = (rule, value, callback) => {
      if (!/^(?![^a-zA-Z]+$)(?!\D+$)/.test(value)) {
        callback(new Error('The password must be 6-18 letters and numbers to upload'))
      } else {
        callback()
      }
    }
    // numbers must be greater than 0
    const upZeroInt = (rule, value, callback) => {
      if (!/^\+?[1-9]\d*$/.test(value)) {
        callback(new Error('numbers must be greater than 0'))
      } else {
        callback()
      }
    }
    const upZeroIntCanNull = (rule, value, callback) => {
      if (!value) {
        callback()
      } else {
        if (!/^\+?[1-9]\d*$/.test(value)) {
          callback(new Error('numbers must be greater than 0'))
        } else {
          callback()
        }
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter password'))
      } else {
        callback()
      }
    }
    return {
      /* table*/
      pageNumMixin: 1,
      pageSizeMixin: 10,
      pageTotalMixin: 0,
      tableDataMixin: [],
      rowDeleteIdArrMixin: [],
      loadingIdMixin: null,
      /* form*/
      formModelMixin: {},
      subFormMixin: {},
      searchFormMixin: {},
      /* form validation*/
      formRulesMixin: {
        isNotNull: [{ required: true, message: 'This field cannot be empty', trigger: 'blur' }],
        isNotNullSecond: [{ required: true, message: 'This field cannot be empty', trigger: 'blur' }],
        mLength8: [
          { required: true, message: 'This field cannot be empty', trigger: 'blur' },
          { max: 8, message: 'Up to 8 characters', trigger: 'blur' }
        ],
        minLength7: [
          { required: true, message: 'This field cannot be empty', trigger: 'blur' },
          { min: 7, message: 'Minimum 7 characters', trigger: 'blur' }
        ],
        length17: [
          { required: true, message: 'This field cannot be empty', trigger: 'blur' },
          { min: 17, max: 17, message: 'Must be 17 characters long', trigger: 'blur' }
        ],
        desc: [{ validator: validatePass, trigger: 'blur' }],
        upZeroInt: [{ validator: upZeroInt, trigger: 'blur' }],
        upZeroIntCanNull: [{ validator: upZeroIntCanNull, trigger: 'blur' }],
        passwordValid: [{ validator: passwordValid, trigger: 'blur' }]
      },
      /* Time packing related */
      datePickerOptions: {
        disabledDate: (time) => {
          return time.getTime() < Date.now() - 86400000
        }
      },
      startEndArrMixin: [],
      startEndArrSubMixin: [],
      /* dialog related*/
      dialogTitleMixin: 'Add to',
      detailDialogMixin: false,
      isDialogEditMixin: false,
      dialogVisibleMixin: false,
      tableLoadingMixin: false,
      /* Cascading correlation*/
      cascaderKeyMixin: 1,
      SetKesDeptMixin: {
        value: 'id',
        expandTrigger: 'hover',
        label: 'label',
        children: 'children'
      },
      SetKesDeptMixinNoStrictlyMixin: {
        value: 'id',
        expandTrigger: 'hover',
        label: 'label',
        children: 'children',
        checkStrictly: true
      },
      SetKesDeptMixinNoStrictly: {
        value: 'id',
        expandTrigger: 'hover',
        label: 'label',
        children: 'children',
        checkStrictly: true
      },
      cascaderOptionsMixinOne: [],
      cascaderOptionsMixin: [],
      /* tree related*/
      treeDataMixin: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    /* cascade*/
    casHandleChangeMixin() {
      // Solve the current cascading selector search input error problem
      ++this.cascaderKey
    },
    /*
     * notification popup
      * message: the content of the notification
      * type: notification type
      * duration: notification display time (ms)
     * */
    elMessageMixin(message, type) {
      type = type || 'success'
      this.$message({
        showClose: true,
        message: message || 'success',
        type: type,
        center: false
      })
    },
    /*
      * loading loading box
      * Close via this.loadingIdMixin.close() after calling
     * */
    elLoadingMixin() {
      this.loadingIdMixin = this.$loading({
        lock: true,
        text: 'Data loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.1)'
      })
    },
    /*
      * hint
      * message: prompt content
      * type: prompt type
      * title: prompt title
      * duration: prompt duration (ms)
     * */
    elNotifyMixin(message, type, title, duration) {
      type = type || 'success'
      this.$notify[type]({
        title: title || 'hint',
        message: message || 'Please pass in a reminder message',
        position: 'top-right',
        duration: duration || 2500,
        offset: 40
      })
    },
    /*
     * Confirmation popup (no cancel button)
     * title: the title of the prompt
     * message: the content of the prompt
     * return Promise
    * */
    elConfirmNoCancelBtnMixin(title, message) {
      return this.$confirm(message || 'Are you sure you want to delete', title || 'confirmation box', {
        confirmButtonText: 'Sure',
        cancelButtonText: 'Cancel',
        showCancelButton: false,
        type: 'warning'
      }).catch(() => {})
    },
    /*
      * Confirmation popup
      * title: the title of the prompt
      * message: the content of the prompt
      * return Promise
     * */
    elConfirmMixin(title, message) {
      return this.$confirm(message || 'Are you sure you want to delete', title || 'confirmation box', {
        confirmButtonText: 'Sure',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
    }
  }
}

const detailDialogMixin = false

export default mixin
