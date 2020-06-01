<template>
  <div>
    <ellipsis :length="300" :content="inputVal" tooltip>我去恶趣味我去饿我去打打2313解耦i丘吉尔哦i九七</ellipsis>
  </div>
</template>

<script>
import Ellipsis from '@/components/Ellipsis'
export default {
  components: { Ellipsis },
  data () {
    return {
      inputVal: '我去恶趣味我去饿我去打打2313解耦i丘吉尔哦i九七'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
