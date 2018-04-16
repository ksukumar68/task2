import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Injectable, OnInit, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { List } from './list/list.model';
import { EventEmitter } from '@angular/core';
@Injectable()
export class LogicService implements OnInit{
	messageIsEdit = new EventEmitter<List>();
	private values = [];
	data:List;
	constructor(private http: Http){}
	ngOnInit(){

	}
	getList(){
		return this.http.get('http://localhost:3000/list',)
			.map((response: Response) => {
				const values = response.json().obj;
				let transformedData = [];
				for(let value of values){
					transformedData
					.push(new List(value._id,value.Name,value.Age,value.Gender,value.Mobile_Number));
				}
				this.values = transformedData;
				return transformedData;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}

	editMessage(data: List){
		this.messageIsEdit.emit(data);
	//	console.log(data);
//		console.log(typeof this.data);		
	}

	// returnmsg(){
	// 	return this.data;
	// }

	updateMessage(data){
		const body = JSON.stringify(data);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.patch('http://localhost:3000/list/' + data.id, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => Observable.throw(error.json()));
	}



	deleteMessage(data){
		// this.messages.splice(this.messages.indexOf(data), 1);
		return this.http.delete('http://localhost:3000/list/' + data.id)
			.map((response: Response) => response.json())
			.catch((error: Response) => Observable.throw(error.json()));
	}
}