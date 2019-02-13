import conf from '../const/conf'
import disableScroll from '../util/disableScroll'
import HeightContent from '../util/HeightContent'
import SmoothScroll from '../util/SmoothScroll'
import MouseCursol from '../util/MouseCursol'
import trottle from 'lodash/throttle'
import debounce from 'lodash/debounce'
import $ from 'jquery'

class BaseController {
    constructor() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.heightContent
        this.smoothscroll
        this.onScroll = () => {}
        this.onResize = () => {}
    }
    init() {
        this.heightContent = new HeightContent()
        this.smoothscroll = new SmoothScroll()
        this.mouseCursol = new MouseCursol()

        this.scroll = trottle(e => this._scroll(e), 16)
        this.resize = debounce(() => this._resize(), 500)
        this.update = () => this._update()

        this.update()
    }
    _initScroll() {
        window.addEventListener('scroll', this.scroll)
    }
    reset() {
        this.smoothscroll.resize()
        delete this.heightContent
        this.heightContent = new HeightContent()
    }
    onLoad() {
        this._resize()
        return new Promise(resolve => {
            this._loading(resolve)
            this.mouse.classList.add('is-show')
        })
    }
    _loading(end) {}
    _scroll(e) {
        let scroll = window.pageYOffset
        this.smoothscroll.setTargetPos(scroll)
    }
    _resize() {
        let height = window.innerHeight
        let width = window.innerWidth

        if (conf.ua.os.name === 'Android' || conf.ua.os.name === 'iOS') {
            if (this.width !== width) {
                this.heightContent.set()
            }
        } else {
            this.heightContent.set()
        }
        this.smoothscroll.resize()

        this.width = width
        this.height = height

        this.onResize(width, height)
    }
    _update() {
        // スクロールを止めていなければ
        if (!disableScroll.isActive) {
            this.smoothscroll.update()
        }

        // スクロールを検知したら
        if (!disableScroll.isActive && this.smoothscroll.isScroll) {
            let scroll = this.smoothscroll.getScroll()
            this.onScroll(scroll)
        }

        requestAnimationFrame(this.update)
    }
    onClickLink(e) {
        let $taregt = $(e.currentTarget)
        let href = $taregt.attr('href')
        if (/^#.+$/.test(href)) {
            window.scrollTo(0, $(href).offset().top)
        }
    }
}

export default BaseController
