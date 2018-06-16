import { Bug } from '../models/Bug';

export class BugStorageService{
	private currentBugId = 0;
	private storage = window.localStorage;

	save(bugData){
		if (bugData.id === 0){
			bugData.id = ++this.currentBugId;	
		}
		this.storage.setItem(bugData.id.toString(), JSON.stringify(bugData));
		return bugData;
	}
	getAll(){
		let bugsFromStorage : Bug[] = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId < bug.id ? bug.id : this.currentBugId;
			bugsFromStorage.push(bug);
		}
		return bugsFromStorage;
	}
	remove(bug){
		this.storage.removeItem(bug.id.toString());
	}
}