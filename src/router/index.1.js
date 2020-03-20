import Vue from 'vue'
import Router from 'vue-router'
import basic from '@/components/basic/basic'

import myMintUI from '@/components/myMintUI/myMintUI'
import myMToast from '@/components/myMintUI/myMToast'
import myMButton from '@/components/myMintUI/myMButton'
import myMSwipe from '@/components/myMintUI/myMSwipe'
import myMLazyLoad from '@/components/myMintUI/myMLazyLoad'

import myVant from '@/components/myVant/myVant'
import myVToast from '@/components/myVant/myVToast'
import myVButton from '@/components/myVant/myVButton'
import myVSwipe from '@/components/myVant/myVSwipe'
import myVLazyLoad from '@/components/myVant/myVLazyLoad'

import myElementUI from '@/components/myElementUI/myElementUI'
import myELayout from '@/components/myElementUI/myELayout'
import myEButton from '@/components/myElementUI/myEButton'
import myEMessage from '@/components/myElementUI/myEMessage'
import myECarousel from '@/components/myElementUI/myECarousel'
import myEImage from '@/components/myElementUI/myEImage'
import myEPreview from '@/components/myElementUI/myEPreview'

import myBetterScroll from '@/components/myBetterScroll/myBetterScroll'
import myBetterScrollDemo0 from '@/components/myBetterScroll/myBetterScrollDemo0'
import myBetterScrollDemo1 from '@/components/myBetterScroll/myBetterScrollDemo1'
import myBetterScrollDemo2 from '@/components/myBetterScroll/myBetterScrollDemo2'
import myBetterScrollDemo3 from '@/components/myBetterScroll/myBetterScrollDemo3'
import myBetterScrollGoodsList from '@/components/myBetterScroll/myBetterScrollGoodsList'
import myBetterScrollAddressList from '@/components/myBetterScroll/myBetterScrollAddressList'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'lac',
  linkExactActiveClass: 'leac',
  routes: [
    {
      path: '/',
      redirect: '/basic'
    },
    {
      path: '/basic',
      name: 'basic',
      component: basic
    },
    {
      path: '/myElementUI',
      name: 'myElementUI',
      component: myElementUI,
      children:[
        {path:"myELayout",component:myELayout},
        {path:"myEButton",component:myEButton},
        {path:"myEMessage",component:myEMessage},
        {path:"myECarousel",component:myECarousel},
        {path:"myEImage",component:myEImage},
        {path:"myEPreview",component:myEPreview}
      ]
    },
    {
      path: '/myVant',
      name: 'myVant',
      component: myVant,
      children:[
        {path:"myVToast",name:"myVToast",component:myVToast},
        {path:"myVButton",name:"myVButton",component:myVButton},
        {path:"myVSwipe",name:"myVSwipe",component:myVSwipe},
        {path:"myVLazyLoad",name:"myVLazyLoad",component:myVLazyLoad}
      ]
    },
    {
      path: '/myMintUI',
      name: 'myMintUI',
      component: myMintUI,
      children:[
        {path:"myMToast",name:"myMToast",component:myMToast},
        {path:"myMButton",name:"myMButton",component:myMButton},
        {path:"myMSwipe",name:"myMSwipe",component:myMSwipe},
        {path:"myMLazyLoad",name:"myMLazyLoad",component:myMLazyLoad}
      ]
    },
    {
      path: '/myBetterScroll',
      name: 'myBetterScroll',
      component: myBetterScroll,
      children:[
        {path:"myBetterScrollDemo0",component:myBetterScrollDemo0},
        {path:"myBetterScrollDemo1",component:myBetterScrollDemo1},
        {path:"myBetterScrollDemo2",component:myBetterScrollDemo2},
        {path:"myBetterScrollDemo3",component:myBetterScrollDemo3},
        {path:"myBetterScrollGoodsList",component:myBetterScrollGoodsList},
        {path:"myBetterScrollAddressList",component:myBetterScrollAddressList},
      ]
    }
  ]
})
