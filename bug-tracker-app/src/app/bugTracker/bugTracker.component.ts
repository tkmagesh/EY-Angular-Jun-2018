import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import { BugSortService } from './services/bugSortService';



@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];
	
	dummy : boolean = null;

	constructor(
		private bugOperations : BugOperationsService, 
		public bugSortService : BugSortService
	){
		
	}

	ngOnInit(){
		//this.bugs = this.bugOperations.getAll();
		this.bugOperations	
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}
	

	onNewBugCreation(newBug){
		this.bugs = [...this.bugs, newBug];
	}
	
	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
	}
	onRemoveClosedClick(){
		/*this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);*/
	}
}