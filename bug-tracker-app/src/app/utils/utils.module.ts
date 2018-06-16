import { NgModule } from '@angular/core';

import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';


@NgModule({
	declarations : [
		TrimTextPipe
    	, SortPipe
    	, ElapsedPipe
	],
	providers : [],
	imports : [],
	exports : [
		TrimTextPipe
    	, SortPipe
    	, ElapsedPipe
	]
})
export class UtilsModule{

}