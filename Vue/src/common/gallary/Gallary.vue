<template>
  
    <div class="container"
         @click="handleGallaryClick"
    >
        <div class="wraaper">
           <swiper :options="swiperOptions">
    <!-- slides -->
            <swiper-slide 
                     v-for="(item,index) of gallaryImgs"
                     :key="index"
                     >
                <img class="gallary-img" 
                     :src="item"
                >
            </swiper-slide>
    
    
             <div class="swiper-pagination"  slot="pagination"></div>
   
    <!-- slides -->
            </swiper>
        </div>
    </div>
  
</template>

<script>
export default {
    name:'Gallary',
    data(){
        return{
            swiperOptions:{
               pagination:'.swiper-pagination',
                paginationType:'fraction'
            }
        }
    },
    props:{
        gallaryImgs:Array
    },
    methods:{
         handleGallaryClick(){
            this.$emit('close')
         }
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
      overflow inherit  
    .container
      display flex
      flex-direction column
      justify-content center 
      position fixed
      left 0
      right 0
      bottom 0 
      top 0
      z-index 99
      background #000
    .wraaper
      width 100%
      height 0
      padding-bottom 100%
      .gallary-img
        width 100%
        height 6rem
      .swiper-pagination
        color #fff
        bottom -1rem


</style>


