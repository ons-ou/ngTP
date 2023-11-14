import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

 generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }

  @HostBinding("style.color")
  @HostBinding("style.borderColor")
  bgc = "black";

  constructor() { }

  @HostListener("keyup")
  onMouseEnter() {
    this.bgc = this.generateRandomColor()
  }
}
