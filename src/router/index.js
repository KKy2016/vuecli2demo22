import Vue from 'vue'
import Router from 'vue-router'

import basic from '@/components/basic/basic'
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
      component:basic
    },
    {
      path: '/myElementUI',
      name: 'myElementUI',
      component:()=> import('@/components/myElementUI/myElementUI'),
      children:[
        {path:"myELayout",component:()=>import('@/components/myElementUI/myELayout')},
        {path:"myEButton",component:()=>import('@/components/myElementUI/myEButton')},
        {path:"myEMessage",component:()=>import('@/components/myElementUI/myEMessage')},
        {path:"myECarousel",component:()=>import('@/components/myElementUI/myECarousel')},
        {path:"myEImage",component:()=>import('@/components/myElementUI/myEImage')},
        {path:"myEPreview",component:()=>import('@/components/myElementUI/myEPreview')},
      ]
    },
    {
      path: '/myVant',
      name: 'myVant',
      component: ()=>import('@/components/myVant/myVant'),
      children:[
        {path:"myVToast",name:"myVToast",component:()=>import('@/components/myVant/myVToast')},
        {path:"myVButton",name:"myVButton",component:()=>import('@/components/myVant/myVButton')},
        {path:"myVSwipe",name:"myVSwipe",component:()=>import('@/components/myVant/myVSwipe')},
        {path:"myVLazyLoad",name:"myVLazyLoad",component:()=>import('@/components/myVant/myVLazyLoad')},
      ]
    },
    {
      path: '/myMintUI',
      name: 'myMintUI',
      component:()=>import('@/components/myMintUI/myMintUI'),
      children:[
        {path:"myMToast",name:"myMToast",component:()=>import('@/components/myMintUI/myMToast')},
        {path:"myMButton",name:"myMButton",component:()=>import('@/components/myMintUI/myMButton')},
        {path:"myMSwipe",name:"myMSwipe",component:()=>import('@/components/myMintUI/myMSwipe')},
        {path:"myMLazyLoad",name:"myMLazyLoad",component:()=>import('@/components/myMintUI/myMLazyLoad')}
      ]
    },
    {
      path: '/myBetterScroll',
      name: 'myBetterScroll',
      component:()=>import('@/components/myBetterScroll/myBetterScroll'),
      children:[
        {path:"myBetterScrollDemo0",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo0')},
        {path:"myBetterScrollDemo1",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo1')},
        {path:"myBetterScrollDemo2",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo2')},
        {path:"myBetterScrollDemo3",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo3')},
        {path:"myBetterScrollGoodsList",component:()=>import('@/components/myBetterScroll/myBetterScrollGoodsList')},
        {path:"myBetterScrollAddressList",component:()=>import('@/components/myBetterScroll/myBetterScrollAddressList')},
      ]
    },
    {
      path: '/myAsyncComponent',
      name: 'myAsyncComponent',
      component:()=>import('@/components/myAsyncComponent/myAsyncComponent')
    },
    {
      path: '/myImg',
      name: 'myImg',
      component:()=>import('@/components/myImg/myImg')
    }
  ]
})
