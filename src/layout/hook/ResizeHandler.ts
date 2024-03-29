const { body } = document
const WIDTH = 992
import { useAppStore } from '@/store/app'
export default function () {
  const appStore = useAppStore()
  const $_isMobile = () => {
    const rect = body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
  }
  const $_resizeHandler = () => {
    if (!document.hidden) {
      const isMobile = $_isMobile()
      if (isMobile) {
        // console.log('closeSideBar')
        /*close the sideBar function according to the window size*/

        appStore.M_sidebar_opened(false)
      } else {
        appStore.M_sidebar_opened(true)
      }
    }
  }
  onBeforeMount(() => {
    window.addEventListener('resize', $_resizeHandler)
  })
  onMounted(() => {
    const isMobile = $_isMobile()
    if (isMobile) {
      appStore.M_sidebar_opened(false)
    } else {
      appStore.M_sidebar_opened(true)
    }
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', $_resizeHandler)
  })
}
