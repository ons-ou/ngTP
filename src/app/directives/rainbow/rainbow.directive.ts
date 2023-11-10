import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  colors: string[] = [
    '#ff0000', // Red
    '#00ff00', // Green
    '#0000ff', // Blue
    '#ffff00', // Yellow
    '#ff00ff', // Magenta
    '#00ffff', // Cyan
  ];


  @HostBinding("style.color")
  @HostBinding("style.borderColor")
  bgc = "black";

  constructor() { }

  @HostListener("keyup")
  onMouseEnter() {
    console.log(Math.floor((Math.random() * 10) % 6))
    this.bgc = this.colors[Math.floor((Math.random() * 10) % 6)]
  }

}
