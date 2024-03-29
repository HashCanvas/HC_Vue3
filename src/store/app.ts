import defaultSettings from '@/settings'
import { defineStore } from 'pinia'
import { SettingTy } from '~/common'
export const useAppStore = defineStore('app', {
  /***
   *Similar to the component's data data, used to store global state
    * 1. Must be an arrow function
   */
  state: () => {
    return {
      sidebar: { opened: true },
      device: 'desktop',
      settings: defaultSettings as SettingTy,
      cachedViews: [] as Array<string>,
      cachedViewsDeep: [] as Array<string>
    }
  },

  /***
   *Encapsulate functions (business logic) that process data: modify data
   */
  actions: {
    M_settings(data) {
      this.$patch((state) => {
        state.settings = { ...state.settings, ...data }
      })
    },
    M_sidebar_opened(data: boolean) {
      this.$patch((state) => {
        state.sidebar.opened = data
      })
    },
    M_toggleSideBar() {
      this.$patch((state) => {
        state.sidebar.opened = !state.sidebar.opened
      })
    },

    /*keepAlive*/
    M_ADD_CACHED_VIEW(view) {
      this.$patch((state) => {
        if (state.cachedViews.includes(view)) return
        state.cachedViews.push(view)
      })
    },

    M_DEL_CACHED_VIEW(view) {
      this.$patch((state) => {
        const index = state.cachedViews.indexOf(view)
        index > -1 && state.cachedViews.splice(index, 1)
      })
    },
    M_RESET_CACHED_VIEW() {
      this.$patch((state) => {
        state.cachedViews = []
      })
    },
    /*third  keepAlive*/
    M_ADD_CACHED_VIEW_DEEP(view) {
      this.$patch((state) => {
        if (state.cachedViewsDeep.includes(view)) return
        state.cachedViewsDeep.push(view)
      })
    },
    M_DEL_CACHED_VIEW_DEEP(view) {
      this.$patch((state) => {
        const index = state.cachedViewsDeep.indexOf(view)
        index > -1 && state.cachedViewsDeep.splice(index, 1)
      })
    },
    M_RESET_CACHED_VIEW_DEEP() {
      this.$patch((state) => {
        state.cachedViewsDeep = []
      })
    },

    A_sidebar_opened(data: boolean) {
      this.M_sidebar_opened(data)
    }
  }
})
