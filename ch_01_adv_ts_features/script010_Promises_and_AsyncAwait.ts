function ExpensiveWebCall(time: number): Promise<void> {
	return new Promise((resolve, reject) => setTimeout(resolve, time));
}

class MyWebService {
	async CallExpensiveWebOperation() {
		try {
			await ExpensiveWebCall(4000);
			console.log(`Finished web service`);
		} catch (err) {
			console.log(`Caught ${err}`);
		}
	}
}

console.log("calling service");
new MyWebService().CallExpensiveWebOperation();
console.log("processing continues until the web service returns.");
