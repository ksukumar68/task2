import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { LogicService } from '../logic.service';

@Component({
	selector: 'app-delete',
	// templateUrl: './list.component.html',
		template: `
		<div class="col-md-6">
			<app-deleteview [message]="message" 
										*ngFor="let message of messages"></app-deleteview>
		</div>
	`,
		providers: [LogicService],
		styles: [`
			td{
				text-align: left;
			}
    `],
})
export class DeleteComponent implements OnInit{
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