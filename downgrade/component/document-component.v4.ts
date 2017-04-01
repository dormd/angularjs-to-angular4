import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'document',
    template: `...`//,
    //styles: `...`
})

export class DocumentComponent {
    @Input() name: string;
    @Input() size: number;
    @Input() numOfPages: number; 
    @Input() content: string;
    
    @Output() opened = new EventEmitter();
    @Output() contentChanged = new EventEmitter();
    @Output() closed = new EventEmitter();
    
    //...
}
