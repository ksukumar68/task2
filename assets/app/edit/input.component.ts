import { List } from '../list/list.model';
import { LogicService } from '../logic.service';
import { NgForm } from '@angular/forms'; 
import { Component, ViewChild, OnInit, Input } from '@angular/core';
@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styles: [`
		input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
	`]
})
export class InputComponent implements OnInit {
//	age: Number;
	List: List ;
				
	x = 'tree';
	constructor( private logicservice: LogicService ){}

onSubmit(form: NgForm){
		console.log(form);
		this.List = new List(form.value.id, form.value.Name,form.value.Age, form.value.Gender,
		form.value.Mobile_Number );
				this.logicservice.updateMessage(this.List)
				.subscribe(
						result => console.log(result)
					);
				
	}

onReset(form: NgForm){
		this.List = null;
		form.resetForm();
	}

	ngOnInit(){
		this.logicservice.messageIsEdit.subscribe(
				(message: List) => this.List = message
			);
	}
	
}
