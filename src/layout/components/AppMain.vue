<template>
  <div class="app-main" :class="{ 'show-tag-view': settings.showTagsView }">
    <router-view v-slot="{ Component }">
      <!--has transition  Judging by settings.mainNeedAnimation-->
      <transition v-if="settings.mainNeedAnimation" name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="key" />
        </keep-alive>
      </transition>
      <!-- no transition -->
      <keep-alive v-else :include="cachedViews">
        <component :is="Component" :key="key" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ObjTy } from '~/common'
import { useAppStore } from '@/store/app'

const route = useRoute()
const settings = computed(() => {
  return appStore.settings
})

const key = computed(() => route.path)

const cachedViews = computed(() => {
  return appStore.cachedViews
})

/*listen the component name changing, then to keep-alive the page*/
// cachePage: is true, keep-alive this Page
// leaveRmCachePage: is true, keep-alive remote when page leave
let oldRoute: ObjTy = {}
let deepOldRouter: ObjTy | null = null

const appStore = useAppStore()
const removeDeepChildren = (deepOldRouter) => {
  deepOldRouter.children?.forEach((fItem) => {
    appStore.M_DEL_CACHED_VIEW_DEEP(fItem.name)
  })
}

watch(
  () => route.name,
  () => {
    const routerLevel = route.matched.length
    //Secondary routing processing
    if (routerLevel === 2) {
      if (deepOldRouter?.name) {
        if (deepOldRouter.meta?.leaveRmCachePage && deepOldRouter.meta?.cachePage) {
          appStore.M_DEL_CACHED_VIEW(deepOldRouter.name)
          //remove the deepOldRouter‘s children component
          removeDeepChildren(deepOldRouter)
        }
      } else {
        if (oldRoute?.name) {
          if (oldRoute.meta?.leaveRmCachePage && oldRoute.meta?.cachePage) {
            appStore.M_DEL_CACHED_VIEW(oldRoute.name)
          }
        }
      }

      if (route.name) {
        if (route.meta?.cachePage) {
          appStore.M_ADD_CACHED_VIEW(route.name)
        }
      }
      deepOldRouter = null
    }

    //Three-level routing processing
    if (routerLevel === 3) {
      //The previous level of the current routing object is stored in the third level
      const parentRoute = route.matched[1]
      //deepOldRouter is not empty, and deepOldRouter is not the parent object of the current route, you need to clear the deepOldRouter cache
      //Generally, it is the case that the third-level routing jumps to the third-level routing
      if (deepOldRouter?.name && deepOldRouter.name !== parentRoute.name) {
        if (deepOldRouter.meta?.leaveRmCachePage && deepOldRouter.meta?.cachePage) {
          appStore.M_DEL_CACHED_VIEW(deepOldRouter.name)
          //remove the deepOldRouter's children component
          removeDeepChildren(deepOldRouter)
        }
      } else {
    //Otherwise go to the normal two-level routing process
        if (oldRoute?.name) {
          if (oldRoute.meta?.leaveRmCachePage && oldRoute.meta?.cachePage) {
            appStore.M_DEL_CACHED_VIEW_DEEP(oldRoute.name)
          }
        }
      }

      //Take the name of the second level
      if (parentRoute.name && parentRoute.meta?.cachePage) {
        deepOldRouter = parentRoute
        appStore.M_ADD_CACHED_VIEW(deepOldRouter.name)
        if (route.name) {
          if (route.meta?.cachePage) {
            //Cache with the third-level name
            appStore.M_ADD_CACHED_VIEW_DEEP(route.name)
          }
        }
      }
    }
    oldRoute = JSON.parse(JSON.stringify({ name: route.name, meta: route.meta }))
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.app-main {
  padding: $appMainPadding;
  /*50 = navbar  */
  position: relative;
  overflow: hidden;
}
.show-tag-view {
  height: calc(100vh - #{$navBarHeight} - #{$tagViewHeight}) !important;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
