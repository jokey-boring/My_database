<template>
  <div>
    <div class="banner"
         @click="handleBannerClick"
    >
       <img class="banner-img" 
            :src=bannerImg>
       <div class="banner-info">
           <div class="banner-tittle">
               {{this.sightName}}
           </div>
           <div class="banner-number">
              <span class="iconfont">&#xeac4;</span>
              {{this.gallaryImgs.length}}
           </div>    
             
       </div>
    </div>
    <fade>
    <gallary v-if="show"
             @close="handleClose"
             :gallaryImgs="gallaryImgs"
    ></gallary>
    </fade>
  </div>
</template>
<script>
import Gallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
export default {
    name:'banner',
    data(){
      return{
        show:false
      }
    },
    props:{
      gallaryImgs:Array,
      bannerImg:String,
      sightName:String
    },
    components:{
       Gallary,
       Fade
     },
    methods:{
      handleBannerClick(){
         this.show = true
      },
      handleClose(){
        this.show = false
      }
    }
}
</script>

<style lang="stylus" scoped>
     .banner
       position relative
       overflow hidden
       height 0
       padding-bottom 55%
       .banner-img
         width 100%
         height 4.125rem
       .banner-info
         display flex
         position absolute
         left 0
         right 0
         bottom 0
         line-height .6rem
         color #fff
         background-image: linear-gradient(top, rgba(0,0,0,.4),
         rgba(0,0,0,.8))  
         .banner-tittle
           flex 1
           font-size .32rem
           padding 0 .2rem
         .banner-number
           height .32rem
           line-height .32rem
           margin-top .2rem
           padding 0 .4rem
           border-radius .2rem
           background rgba(0,0,0,.8)
           font-size .24rem
           .banner-icon
             font-size .24rem
</style>
