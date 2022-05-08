/*Write using vue3.0 jsx syntax*/
import ElSvgItem from './ElSvgItem.vue'
export default defineComponent({
  props: {
    icon: {
      type: String,
      default: ''
    },
    meta: {
      type: Object,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    elIcon: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const renderItem = () => {
      if (props.meta?.elSvgIcon) {
        //using element-plus svg icon
        // element-plus remove el-icon,using 'svg icon'  to replace
        // view https://element-plus.org/en/component/icon.html
        return <ElSvgItem elSvgName={props.meta.elSvgIcon} />
      } else if (props.meta?.icon) {
        //console.log('I got into rendering')
        return <svg-icon icon-class={props.meta?.icon} className="nav-icon" />
      }
    }
    return () => {
      return renderItem()
    }
    // return () => (
    //   <div>{renderItem()}</div>
    // )
  }
})
