import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Введите имя:</label>
                <p [textContent]="age">Вік {{age}}</p>   
                <input [(ngModel)]="name" placeholder="name">
                <input type="text" [attr.value]="age">
                <h1>Добро пожаловать {{name}}!</h1>
                <p>Count click is {{count}}</p>
                <button (click)="increase($event)">Click me!</button>
                <hr>
                <button on-click="increase($event)">Click me two!</button>
    
                <input type="text" [(ngModel)]="name">
                <input type="text" [(ngModel)]="age" placeholder="age">
    
                <div [class.isredbox]="isRed">div 1</div>
                <div [class.isredbox]="!isRed">div 2</div>
                <div class="{{className}}">div 3</div>
                <div [class] = "className">div 4</div>
                <input type="checkbox" [(ngModel)]="isRed">  <br>
                Select: <input type="checkbox">
    
                <hr>
                <div class="" [style.backgroundColor]="colorBox">div 5</div>
                <input type="text" [(ngModel)]="colorBox">
                <h2>H2 in app component</h2>
                <child-comp><h2>Hello_2, {{name}}</h2></child-comp>
                `,
    styles: [`
        div {width:50px; height: 50px; border:1px solid #ccc}
        .isredbox{background-color:red;}
    `]
})
export class AppComponent {
    name = '';
    age = 33;
    isRed = false;
    className = 'isredbox';
    colorBox = ''

    count: number = 0;
    increase($event: any): void {
        this.count++;
        console.log($event);
    }
}