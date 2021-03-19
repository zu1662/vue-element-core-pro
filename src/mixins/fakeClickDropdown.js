// element select dropdown 不跟随元素定位时，使用此 mixin，达到滚动关闭 dropdown 的效果
let lock = true
let el = null
const MousedownEvent = new Event('mousedown', { bubbles: true })
const MouseupEvent = new Event('mouseup', { bubbles: true })
const fakeClickOutSide = () => {
  document.dispatchEvent(MousedownEvent)
  document.dispatchEvent(MouseupEvent)
  lock = true // console.log('dispatchEvent');
}
const mousedownHandle = e => {
  const classList = e.target.classList
  if (
    classList.contains('el-select__caret') ||
    classList.contains('el-input__inner')
  ) {
    lock = false
    return
  }
  if (lock) return
  fakeClickOutSide()
}
const mousewheelHandle = e => {
  if (
    lock ||
    e.target.classList.contains('el-select-dropdown__item') ||
    e.target.parentNode.classList.contains('el-select-dropdown__item')
  ) return

  fakeClickOutSide()
}
const eventListener = type => {
  el[type + 'EventListener']('mousedown', mousedownHandle)
  window[type + 'EventListener']('mousewheel', mousewheelHandle)
  window[type + 'EventListener']('DOMMouseScroll', mousewheelHandle) // fireFox 3.5+
}
export default {
  mounted () {
    el = this.$root.$el
    el.addFakeClickOutSideEventCount = el.addFakeClickOutSideEventCount || 0
    !el.addFakeClickOutSideEventCount &&
      this.$nextTick(() => {
        eventListener('add')
      })
    el.addFakeClickOutSideEventCount += 1
  },
  destroyed () {
    eventListener('remove')
    el.addFakeClickOutSideEventCount -= 1
  }
}
