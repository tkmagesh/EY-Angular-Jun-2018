import { Component, Input, OnChanges } from '@angular/core';

@Component({
	selector : 'app-calculator-result',
	template : `
		<div [ngClass]="resultStyle">
			{{data}}
		</div>
	`,
	styleUrls : ['calculatorResult.component.css']
})
export class CalculatorResultComponent implements OnChanges{

	@Input()
	data : number = 0;

	resultStyle = {
			positive : this.data >= 0, 
			negative : this.data < 0
		};

	ngOnChanges(){
		console.log('ngOnChages triggered');
		this.resultStyle = {
			positive : this.data >= 0, 
			negative : this.data < 0
		};
	}
}