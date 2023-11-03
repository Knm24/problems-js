class Timer {
    private currTimeMS: number;
    private startNum: number;
    private isPaused: boolean;
    private elapsedTime: number;

    constructor() {
        this.currTimeMS = new Date().getTime();
        this.startNum = this.currTimeMS;
        this.isPaused = false;
        this.elapsedTime = 0;
    }
    
    start() {
        while (true) {
            this.currTimeMS = new Date().getTime();
            this.elapsedTime = Math.floor((this.currTimeMS - this.startNum) / 1000);
            console.log(this.elapsedTime);

            if (this.isPaused) {
                break;
            }
        }
    }
    
    pause() {
        this.isPaused = true;
    }
    
    reset() {
        this.startNum = new Date().getTime();
        this.elapsedTime = 0;
    }

    log() {
        console.log(this.elapsedTime);
    }
}


export default Timer;
