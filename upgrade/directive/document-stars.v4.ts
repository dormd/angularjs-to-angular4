import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'document-stars'
})
export class DocumentStarsDirective extends UpgradeComponent {
  @Input() num: number;
  @Output() clicked: EventEmitter<number>;
  
  constructor(elementRef: ElementRef, injector: Injector) {
    super('documentStars', elementRef, injector);
  }
}
