class Timer {
  #startTime: number;
  #isPaused: boolean;
  #elapsedTime: number;

  constructor() {
    this.#startTime = 0;
    this.#isPaused = true;
    this.#elapsedTime = 0;
  }

  public start(): void {
    if (this.#isPaused) {
      this.#startTime = new Date().getTime();
      this.#isPaused = false;
    }
  }

  public pause(): void {
    if (!this.#isPaused) {
      this.#elapsedTime += new Date().getTime() - this.#startTime;
      this.#isPaused = true;
    }
  }

  public reset(): void {
    this.#startTime = 0;
    this.#elapsedTime = 0;
    this.#isPaused = true;
  }

  public log(): void {
    const currentTime = this.#isPaused
      ? this.#elapsedTime
      : this.#elapsedTime + (new Date().getTime() - this.#startTime);

    const milliseconds = currentTime;
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));

    console.log({ h: hours, m: minutes, s: seconds, ms: milliseconds % 1000 });
  }
}


export default Timer;
