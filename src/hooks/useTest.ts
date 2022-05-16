export default function () {
  const ref1 = ref<string>('hook data')
  const ref2 = ref<string>('hook data ref2')
  onMounted(() => {
    console.log('hooks onMounted')
  })
  const hooksFunc = (): string => {
    alert('I am the method in the hook')
    return 'hook method executed'
  }
  return {
    ref1,
    ref2,
    hooksFunc
  }
}
