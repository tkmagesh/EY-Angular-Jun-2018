export function add(x: number,y: number): number{
	return x + y;
}

export function subtract(x:number,y:number):number{
	return x - y;
}

let calculator = { add, subtract };

export default calculator;
