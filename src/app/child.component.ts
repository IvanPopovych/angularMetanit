import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `            
        <ng-content></ng-content>    
        <h2>Hello {{name}}</h2>`,
    styles: [`
        h2, p {
            color: red;
        }
    `]
})

export class ChildComponent {
    name = "Ivan"
}