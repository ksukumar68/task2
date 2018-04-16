import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { LogicService } from '../logic.service';

@Component({
	selector: 'app-edit',
//	templateUrl: './edit.component.html',col-md-8 col-md-offset-2
	template: `
		<div class="col-md-6">
			<app-editview [message]="message" 
										*ngFor="let message of messages"></app-editview>
		</div>
		<app-input></app-input>
	`,
		providers: [LogicService],
		styles: [`
			td{
				text-align: left;
			}
			input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
    `],	

})
export class EditComponent implements OnInit{
	constructor(private logicService: LogicService){}
	messages = [];
	ngOnInit(){
		this.logicService.getList()
		.subscribe(
				(messages) => {
					this.messages = messages;
				}
			);
	}

}