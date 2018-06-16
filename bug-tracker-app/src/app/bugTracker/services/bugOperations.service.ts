import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';


@Injectable()
export class BugOperationsService{
	constructor(private bugStorage : BugStorageService){

	}
	getAll(){
		return this.bugStorage.getAll();
	}
	createNew(bugName : string) : Bug{
		let newBugData = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		let newBug = this.bugStorage.save(newBugData);
		return newBug;
	}
	toggle(bugToToggle : Bug) : Bug{
		let toggledBugData : Bug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		let toggledBug = this.bugStorage.save(toggledBugData);
		return toggledBug;
	}
	remove(bugToRemove : Bug) : void {
		this.bugStorage.remove(bugToRemove);
	}
}