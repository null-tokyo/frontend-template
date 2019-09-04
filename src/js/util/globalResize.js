class GlobalResize {
    constructor() {
        this.width = document.documentElement.clientWidth
        this.height = document.documentElement.clientHeight
        this.onResize = e => this._onResize(e)
        this.handlers = []
        window.addEventListener('resize', this.onResize)
    }
    _onResize() {
        this.width = document.documentElement.clientWidth
        this.height = window.innerHeight
        for (let i = 0; i < this.handlers.length; i++) {
            this.handlers[i](this.width, this.height)
        }
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

export default new GlobalResize()
