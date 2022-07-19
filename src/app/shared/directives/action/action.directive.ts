import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAction]'
})

export class ActionDirective {
  @Output() public appAction: EventEmitter<Event> = new EventEmitter();

  @HostListener('click', ['$event'])
  public hendleClick(event: Event): void {
    this.appAction.emit(event);
  }

  @HostListener('keyup', ['$event'])
  public hendleKeyUp(event: KeyboardEvent): void {
    this.appAction.emit(event);
  }
}
