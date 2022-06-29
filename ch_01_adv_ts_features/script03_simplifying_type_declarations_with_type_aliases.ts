type StringOrNumber = string | number;
type NullableStringOrNumber = StringOrNumber | null;

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

class UnionRangeValidationWithTypeAliases extends RangeValiationBase {
    IsInRange(value: StringOrNumber): boolean {
        if (typeof value === "number") {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}

let total: string | number = 10;

if (new UnionRangeValidationWithTypeAliases(0, 100).IsInRange(total)) {
    console.log("this value is in range");
}
