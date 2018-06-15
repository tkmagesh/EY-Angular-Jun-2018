import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];
	bugSortAttr : string = 'name';
	bugSortDescending : boolean = false;

	/*bugOperations : BugOperationsService = null;

	constructor(_bugOperations : BugOperationsService){
		this.bugOperations = _bugOperations;
	}*/

	constructor(private bugOperations : BugOperationsService){
		this.loadTestBugs();
	}
	
	loadTestBugs(){
		this.onAddNewClick('Server communication failure');
		this.onAddNewClick('Data integrity checks failed');
		this.onAddNewClick('User actions not recognized');
		this.onAddNewClick('Application is not responding');
	}

	onAddNewClick(bugName : string){
		let newBug : Bug = this.bugOperations.createNew(bugName);
		this.bugs.push(newBug);
	}
	onBugNameClick(bug : Bug){
		this.bugOperations.toggle(bug);
	}
	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
	getClosedCount(){
		return this.bugs.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}
}