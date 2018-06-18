import { Component } from '@angular/core';
import { BugSortService } from '../services/bugSortService';

@Component({
	selector : 'app-bug-sort',
	template : `
		<section class="sort">
			<label for="">Order By :</label>
			<select (change)="bugSortService.sortAttr = $event.target.value">
				<option value="name">Name</option>
				<option value="isClosed">Status</option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" (change)="bugSortService.sortDescending = $event.target.checked">
		</section>
	`,
	providers : []
})
export class BugSortComponent{
	constructor(public bugSortService : BugSortService){

	}
}