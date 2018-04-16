import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { LogicService } from '../logic.service';

@Component({
	selector: 'app-editview',
	templateUrl: './editview.component.html',
	providers: [LogicService],
	styles: [`
			td{
				text-align: left;
			}
    `],

})
export class EditviewComponent implements OnInit{
	constructor(private logicService: LogicService){}
	@Input() message;
	ngOnInit(){
	}
	onEdit(){
//		this.editClicked.emit('A new value');
			this.logicService.editMessage(this.message);
			
	}
}