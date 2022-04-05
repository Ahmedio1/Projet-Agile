import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChronometreService {

  time = 120;
  interval: any | undefined;

  constructor() {
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        this.pauseTimer();
        this.restartTimer();
      }
    }, 1000);
  }

  pauseTimer(): void {
    // tslint:disable-next-line:no-non-null-assertion
    clearInterval(this.interval!);
  }

  restartTimer(): void {
    this.time = 0;
  }

  getMinutes(): number {
    return Math.round((this.time / 60) - ((this.time % 60) / 60));
  }

  getSecondes(): number {
    return this.time % 60;
  }

}
