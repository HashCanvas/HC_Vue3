export default function (selectPageReq: any) {
  /*pagination*/
  const pageNum = ref(1)
  const pageSize = ref(10)
  const handleCurrentChange = (val: number) => {
    pageNum.value = val
    selectPageReq()
  }
  const handleSizeChange = (val: number) => {
    pageSize.value = val
    selectPageReq()
  }
  onMounted(() => {})
  return {
    pageNum,
    pageSize,
    handleCurrentChange,
    handleSizeChange
  }
}
