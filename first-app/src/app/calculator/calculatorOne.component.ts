import { Component} from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	model : CalculatorModel = new CalculatorModel();

	resultStyle = {
		positive : this.model.result >= 0, 
		negative : this.model.result < 0
	};	
}