import useragnt from '../util/useragnt'
import globalResize from './globalResize'
import globalFrame from './globalFrame'
import { TweenLite } from 'gsap'

const OPTION = {
    force: 0.09,
    containerClass: '.js-smooth-scroll',
    innerClass: '.js-smooth-scroll-inner',
}

class SmoothScroll {
    constructor(option) {
        this.opt = Object.assign({}, OPTION, option)
        this.$body = document.getElementsByTagName('body')[0]
        this.$scroll = document.querySelector('.l-wrapper')

        this.$inner
        this.isScroll = false
        this.scroll = 0
        this.targetPos = 0
        this.isThrottle = 0
        this.onScroll = e => this._onScroll(e)
        this.handlers = []

        this.isMobile = false
        if (useragnt.ua.device.type === 'mobile') {
            this.isMobile = true
        }

        if (!this.isMobile) {
            window.addEventListener('scroll', this.onScroll)
        }
    }
    init() {
        this.isScroll = false

        this.update = () => this._update()
        this.resize = () => this._resize()

        this.$inner = document.querySelector(this.opt.innerClass)
        this.scroll = 0
        this.targetPos = 0

        this.$body.style.height = `${this.$inner.clientHeight}px`
        setTimeout(() => {
            window.scrollTo(0, 0)
            globalFrame.removeEvent(this.update)
            globalResize.removeEvent(this.resize)
            globalFrame.addEvent(this.update)
            globalResize.addEvent(this.resize)
        })
    }
    _onScroll(e) {
        let scroll = window.pageYOffset
        this.setTargetPos(scroll)
    }
    _update() {
        if (this.isMobile) {
            this.isThrottle += 1
            if (this.isThrottle > 10) {
                this.isThrottle = 0
                this.scroll = this.$scroll.scrollTop
                this._render()
            }
            return
        }

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
        if (!this.isMobile) {
            TweenLite.set(this.$inner, { y: -this.scroll })
            if (!this.isScroll) return
        }
        for (let i = 0; i < this.handlers.length; i++) {
            this.handlers[i](this.scroll)
        }
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
    destroy() {
        cancelAnimationFrame(this.rafID)
    }
    _resize() {
        this.$body.style.height = `${this.$inner.clientHeight}px`
    }
    addEvent(f) {
        this.removeEvent(f)
        this.handlers.push(f)
    }
    removeEvent(f) {
        for (let i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i] === f) {
                this.handlers.splice(i, 1)
            }
        }
    }
}

window.smoothScroll = new SmoothScroll()
