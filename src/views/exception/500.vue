<template>
  <div>
    <div class="my-scroll" v-scrolltop='scrollTop'>
      <div class="year-text" :class="[selectYearItem===item && 'year-text-active']" ref='yearDom' v-for="(item,index) in yearList" :key='index*0.2+3' @click="selectYear(item,index)">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AAA',
  data () {
    return {
      yearList: [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007],
      scrollTop: false,
      selectYearItem: 2020
    }
  },
  mounted () {
    this.selectYear(this.yearList[0], 0)
  },
  methods: {
    selectYear (item, index) {
      this.selectYearItem = item
      this.$nextTick(() => {
        const offset = this.$refs.yearDom[index].offsetTop - 80
        this.scrollTop = {
          allowScroll: true,
          offset: offset,
          complete: () => {
            this.scrollTop = false
          }
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.my-scroll{
  overflow-y: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
  }
  .year-text {
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    width: 100px;
    text-align: center;
    line-height: 30px;

    &.year-text-active {
      color: red;
    }
  }
}
</style>
