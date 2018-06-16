import { Pipe, PipeTransform} from '@angular/core';
import { Bug } from '../models/Bug';

@Pipe({
	name : 'closedCount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform{
	transform(data : Bug[]) : number{
		return data.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}
}