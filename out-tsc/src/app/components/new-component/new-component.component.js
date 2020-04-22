import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NewComponent = class NewComponent {
    constructor() {
        this.titulo = 'hello world again';
        this.test = 'hello world again';
        this.year = 2020;
        console.log('my new Component is working');
        console.log(this.titulo);
        console.log(this.test);
        console.log(this.year);
    }
};
NewComponent = __decorate([
    Component({
        selector: 'new-component',
        templateUrl: './new-component.component.html'
    })
], NewComponent);
export { NewComponent };
//# sourceMappingURL=new-component.component.js.map