import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { LogicService } from '../logic.service';

@Component({
	selector: 'app-list',
	// templateUrl: './list.component.html',
		template: `
		<div class="col-md-6">
			<app-details [message]="message" 
										*ngFor="let message of messages"></app-details>
		</div>
	`,
		providers: [LogicService],
		styles: [`
			td{
				text-align: left;
			}
    `],
})
export class ListComponent implements OnInit{
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