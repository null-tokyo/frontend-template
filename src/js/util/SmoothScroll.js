import $ from 'jquery'
import { TweenLite } from 'gsap'

const OPTION = {
    force: 0.3,
    containerClass: '.js-smooth-scroll',
    innerClass: '.js-smooth-scroll-inner',
}

class SmoothScroll {
    constructor(option) {
        this.opt = Object.assign({}, OPTION, option)
        this.$scroll
        this.$inner
        this.isScroll = false
        this.init()
    }
    init() {
        this.$scroll = $(this.opt.containerClass)
        this.$inner = $(this.opt.innerClass)
        this.scroll = 0
        this.targetPos = 0
        this.resize()
    }
    update() {
        this.scroll += (this.targetPos - this.scroll) * this.opt.force
        if (this.scroll < 0.01) {
            this.scroll = 0
            this.isScroll = false
        } else if (Math.abs(this.targetPos - this.scroll) < 0.01) {
            this.scroll = this.targetPos
            this.isScroll = false
        } else {
            this.isScroll = true
        }
        this._render()
    }
    _render() {
        TweenLite.set(this.$inner, { y: -this.scroll })
    }
    setTargetPos(scroll) {
        this.targetPos = scroll
    }
    setScroll(scroll) {
        this.scroll = scroll
        this.targetPos = scroll
        this._render()
    }
    getScroll() {
        return this.scroll
    }
    resize() {
        $('body').height(this.$inner.height())
    }
    destroy() {
        cancelAnimationFrame(this.rafID)
    }
}

export default SmoothScroll
