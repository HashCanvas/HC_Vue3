const mixin = {
  data() {
    return {
      /* router jump related*/
      queryParamsMixin: null
    }
  },
  created() {
    // Generic get page parameters
    if (this.$route?.query?.params) {
      this.queryParamsMixin = JSON.parse(this.$route.query.params)
    }
  },
  methods: {
    // vue router jump
    routerPushMixin(name, params) {
      let data = {}
      if (params) {
        data = {
          params: JSON.stringify(params)
        }
      } else {
        data = {}
      }
      this.$router.push({
        name: name,
        query: data
      })
    },
    routerReplaceMixin(name, params) {
      let data = {}
      if (params) {
        data = {
          params: JSON.stringify(params)
        }
      } else {
        data = {}
      }
      this.$router.replace({
        name: name,
        query: data
      })
    },
    routerBackMixin() {
      this.$router.go(-1)
    }
  }
}

export default mixin
