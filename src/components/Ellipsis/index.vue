<script>
import { getStrFullLength, cutStrByFullLength } from '@/utils/domUtil'
export default {
  name: 'Ellipsis',
  functional: true,
  props: {
    prefixCls: {
      type: String,
      default: 'ellipsis'
    },
    tooltip: {
      type: Boolean
    },
    length: {
      type: Number,
      required: true
    },
    lines: {
      type: Number,
      default: 1
    }
  },
  render (h, context) {
    const vnodes = []

    const { tooltip, length } = context.props
    const str = context.children.map(vNode => vNode.text).join('')
    const fullLength = getStrFullLength(str)
    if (tooltip && fullLength > length) {
      vnodes.push(
        <el-tooltip effect="dark" content={ str } placement="top-start">
          <span>{ cutStrByFullLength(str, length) + (fullLength > length ? '...' : '') }</span>
        </el-tooltip>
      )
    } else {
      vnodes.push(
        <span>{ cutStrByFullLength(str, length) + (fullLength > length ? '...' : '') }</span>
      )
    }
    return vnodes
  }
}
</script>
