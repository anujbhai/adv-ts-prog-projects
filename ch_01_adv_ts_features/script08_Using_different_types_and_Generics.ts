class Queue<T> {
	private queue: T[] = [];

	public Push(val: T): void {
		this.queue.push(val);
	}

	public Pop(): T | undefined {
		return this.queue.shift();
	}
}

const queue: Queue<number> = new Queue<number> ();
const strQueue: Queue<string> = new Queue<string>();

queue.Push(10);
queue.Push(35);

console.log(queue);
console.log(queue.Pop());
console.log(queue.Pop());

strQueue.Push("Hello");
strQueue.Push("Generics");

console.log(strQueue);
console.log(strQueue.Pop());
console.log(strQueue.Pop());

/* --------------------------------------------------------------- */

interface IStream {
	ReadStream(): Int8Array; // Array of bytes
}

class Data<T extends IStream> {
	ReadStream(stream: T) {
		let output = stream.ReadStream();
		console.log(output.byteLength);
	}
}

class WebStream implements IStream {
	ReadStream(): Int8Array {
		let arr: Int8Array = new Int8Array(8);

		for (let i: number = 0; i < arr.length; i++) {
			arr[i] = i + 3;
		}

		return arr;
	}
}

class DiskStream implements IStream {
	ReadStream(): Int8Array {
		let arr: Int8Array = new Int8Array(20);

		for (let i: number = 0; i < arr.length; i++) {
			arr[i] = i + 3;
		}

		return arr;
	}
}

const webStream = new Data<WebStream>();
const diskStream = new Data<DiskStream>();

webStream.ReadStream(new WebStream());
diskStream.ReadStream(new DiskStream());
