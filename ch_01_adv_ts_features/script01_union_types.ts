class RangeValiationBase {
	constructor(
		private start: number,
		private end: number
	) {}

	protected RangeCheck(val: number): boolean {
		return val >= this.start && val <= this.end
	}
									
	protected GetNumber(val: string): number {
		return new Number(val).valueOf();
	}
}
	
class SeparateTypeRangeValidation extends RangeValiationBase {
	IsInRange(val: string): boolean {
		return this.RangeCheck(this.GetNumber(val));
	}
	IsInRangeNumber(val: number): boolean {
		return this.RangeCheck(val);
	}
}

class UnionRangeValidation extends RangeValiationBase {
	IsInRange(val: string | number): boolean {
	if (typeof val === "number") {
		return this.RangeCheck(val);
	}

	return this.RangeCheck(this.GetNumber(val));
}

/* ---------------------------------------------- Convert Temprature ---------------------------------------------- */
class FarToCel {
	Convert(temp: number): string {
		return `${(temp - 32) * 5 / 9} deg Celcius`;
	}
}

class CelToFar {
	Convert(temp: number): string {
		return `${(temp * 9 / 5) + 32} deg Farenheit`;
	}
}

class ConvertTemp {
	Convert(temp: number, converter: FarToCel | CelToFar): string {
		return converter.Convert(temp);
	}
}

let converter = new ConvertTemp();
console.log(converter.Convert(100, new CelToFar()));
console.log(converter.Convert(98.6, new FarToCel()));

