import { Component } from '@angular/core';

@Component({
	selector:'new-component',
	templateUrl:'./new-component.component.html'
})

export class NewComponent{

	public titulo: string;
	public test: string;
	public year: number;

	constructor (){
		this.titulo = 'hello world again';
		this.test = 'hello world again';
		this.year = 2020;
		console.log('my new Component is working');
		console.log(this.titulo);
		console.log(this.test);
		console.log(this.year);
	}
}