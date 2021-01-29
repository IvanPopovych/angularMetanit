import { Input, Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `            
        <ng-content></ng-content>    
        <h2>Hello {{name}}</h2>
        
        <p>Name user is {{userName}}</p>
        <p>Age user is {{userAge}}</p>
    
    `,
    styles: [`
        h2, p {
            color: red;
        }
    `]
})

export class ChildComponent {
    name = "Ivan";

    @Input() userName: string;
    @Input() userAge: number;
}