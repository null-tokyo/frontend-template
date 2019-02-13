import BaseController from './controller/BaseController'
// import pjax from './util/Pjax/index'

let baseController = new BaseController()
baseController.init()

baseController.onResize(() => {})
baseController.onScroll(() => {})

// let pjax = new Pjax()
// pjax.init()
// pjax.on('linkClicked', () => {})
// pjax.on('initStateChange', () => {})
// pjax.on('newPageReady', () => {
//     pageController = new IndexController()
//     baseController.reset()
//     pageController.init()
// })
// pjax.on('transitionCompleted', () => {
//     pageController.onLoad()
//     baseController.reset()
// })
