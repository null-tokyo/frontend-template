import '@babel/polyfill'
import $ from 'jquery'
import 'intersection-observer'
import LoadImage from './LoadImage'
import globalResize from '../util/globalResize'

const OPTION = {
    target: '.js-image-loader',
}

class ImageLoader {
    constructor(option) {
        this.option = $.extend({}, OPTION, option)
        this.onScroll = scroll => this._onScroll(scroll)
        this.onResize = (width, height) => this._onResize(width, height)
        this.init()
    }
    init() {
        //this.handler = (e, o) => this._handler(e, o)
        this.target = document.querySelectorAll(this.option.target)

        this.setup()
        this.height = globalResize.height

        window.smoothScroll.addEvent(this.onScroll)
        globalResize.addEvent(this.onResize)
    }
    setup() {
        // this.observer = new IntersectionObserver(this.handler, {
        //     rootMargin: '300px',
        // })
        this.listener = []
        this.instances = []
        // for (let i = 0; i < this.target.length; i++) {
        //     this.target[i].dataset.index = i
        //     //this.listener[i] = this.observer.observe(this.target[i])
        //     this.instances[i] = new LoadImage(this.target[i])
        //     this.instances[i].init()
        // }

        this.data = []

        for (let i = 0; i < this.target.length; i++) {
            this.target[i].dataset.index = i

            this.data[i] = {
                $target: $(this.target[i]),
                top: $(this.target[i]).offset().top,
                isActive: false,
            }

            this.instances[i] = new LoadImage(this.target[i])
            this.instances[i].init()
            //this.listener[i] = this.observer.observe(this.target[i])
        }
    }
    // _handler(entries, observer) {
    //     for (let entry of entries) {
    //         if (entry.isIntersecting) {
    //             let $target = entry.target
    //             let index = $target.dataset.index
    //             observer.unobserve($target)
    //             $target.classList.add('is-enter')
    //             this.instances[index].render()
    //         }
    //     }
    // }
    // destroy() {
    //     this.observer.disconnect()
    // }
    _onScroll(scroll) {
        for (let i = 0; i < this.data.length; i++) {
            if (!this.data[i].isActive) {
                if (this.data[i].top < scroll + this.height + 100) {
                    this.data[i].$target.addClass('is-enter')
                    this.instances[i].render()
                    this.data[i].isActive = true
                }
            }
        }
    }
    _onResize(width, height) {
        this.height = height
        for (let i = 0; i < this.target.length; i++) {
            this.data[i].top = $(this.target[i]).offset().top
        }
    }
    destroy() {
        window.smoothScroll.removeEvent(this.onScroll)
        globalResize.removeEvent(this.onResize)
    }
}

export default ImageLoader
