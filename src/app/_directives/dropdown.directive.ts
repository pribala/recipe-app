import { Directive, HostListener, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() className: string;
  @Input() menu;
  isOpen = false;
  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    console.log('click');
    console.log(this.className);
    console.log('element', this.menu.className);
    if (!this.isOpen) {
      this.renderer.addClass(this.menu, this.className);
    } else {
      this.renderer.removeClass(this.menu, this.className);
    }
    this.isOpen = !this.isOpen;
  }

}
