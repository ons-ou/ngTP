import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() in = "yellow";
  @Input() out = "red";
  @HostBinding("style.backgroundColor")
  bgc = this.out;
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    this.bgc = this.out;
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.bgc = this.in;
    this.element.nativeElement.innerHTML = "IN";
  }
  @HostListener("mouseleave")
  onMouseLeave() {
    this.bgc = this.out;
    this.element.nativeElement.innerHTML = "OUT";
  }

}
