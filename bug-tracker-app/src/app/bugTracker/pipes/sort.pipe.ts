import { Pipe, PipeTransform } from '@angular/core';


interface Comparer{
	(item1 : any, item2 : any) : number
}

@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{
	private getComparer(attrName : string) : Comparer {
		return function(item1 : any, item2 : any) : number {
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}

	private getDescedningComparer(comparer : Comparer) : Comparer{
		return function(item1 : any, item2 : any) : number {
			return comparer(item1, item2) * -1;
		}
	}

	transform(data : any[], attrName : string, descending : boolean = false) : any[] {
		//console.log('sort transform triggerd with ', data, attrName, descending);
		if (!attrName) return data.sort();
		let comparer = this.getComparer(attrName);
		if (descending)
			comparer = this.getDescedningComparer(comparer);
		return data.sort(comparer);
	}
}