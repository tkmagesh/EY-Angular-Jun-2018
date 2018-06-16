import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../models/Bug';
import { Observable } from 'rxjs';

@Injectable()
export class BugServerService{

	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private httpClient : HttpClient){

	}
	save(bugData) : Observable<Bug>{
		if (bugData.id === 0){
			return this.httpClient
				.post<Bug>(this.baseUrl, bugData)
		} else {
			return this.httpClient
				.put<Bug>(`${this.baseUrl}/${bugData.id}`, bugData);
		}
	}
	getAll() : Observable<Bug[]>{
		return this.httpClient
			.get<Bug[]>(this.baseUrl);
	}
	remove(bug){
		
	}
}