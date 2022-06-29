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
