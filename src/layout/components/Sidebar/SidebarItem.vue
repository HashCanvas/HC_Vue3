<template>
  <template v-if="!item.hidden">
    <template v-if="showSidebarItem(item.children, item)">
      <Link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
          <item :meta="onlyOneChild.meta || item.meta" />
          <template #title>{{ onlyOneChild.meta?.title }}</template>
        </el-menu-item>
      </Link>
    </template>
    <el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template v-if="item.meta" #title>
        <item :meta="item.meta" />
        <span>{{ item.meta.title }}</span>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
/*Initialization parameters such as importing components, proxy, state, etc.**/
import Link from './Link.vue'
import Item from './Item'
import { isExternal } from '@/utils/validate'
import path from 'path'
import { RouteItemTy } from '~/router'
const props = defineProps({
  //router Item
  item: {
    type: Object,
    required: true
  },
  //Used to determine whether it is a child Item and set the style of the response
  isNest: {
    type: Boolean,
    default: false
  },
  //base path, for stitching
  basePath: {
    type: String,
    default: ''
  }
})
onMounted(() => {
  // console.log("I have mounted");
  // console.log(proxy.item);
})
//sidebarItem
let onlyOneChild: any = ref(null)
const showSidebarItem = (children = [], parent: RouteItemTy) => {
  const showingChildren = children.filter((item: RouteItemTy) => {
    if (item.hidden) {
      return false
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item
      return true
    }
  })
  if (showingChildren.length === 1 && !parent?.alwaysShow) {
    return true
  }
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noChildren: true }
    return true
  }
  return false
}
const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  return path.resolve(props.basePath, routePath)
}
</script>

<style lang="scss">
// menu hover
/* .submenu-title-noDropdown,
  .el-submenu__title {
    &:hover {
      background-color: $menuHover !important;
    }
  }

  .is-active>.el-submenu__title {
    color: $subMenuActiveText !important;
  }*/
</style>
