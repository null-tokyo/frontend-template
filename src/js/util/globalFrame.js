class GlobalFrame {
    constructor() {
        this.handlers = []
        this.update = () => this._update()
        this.isStop = true
    }
    addEvent(f) {
        let func = {
            isStop: false,
            handler: f,
        }
        this.removeEvent(func)
        this.handlers.push(func)
    }
    removeEvent(f) {
        for (let i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i].handler === f) {
                this.handlers.splice(i, 1)
            }
        }
    }
    start() {
        this.isStop = false
        this.update()
    }
    _update() {
        for (let i = 0; i < this.handlers.length; i++) {
            this.handlers[i].handler()
        }
        requestAnimationFrame(this.update)
    }
    stop() {
        this.isStop = true
    }
}

export default new GlobalFrame()
