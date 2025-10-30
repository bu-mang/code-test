class TypedQueue<T> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  rear(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

/* 사용 예 */
const q = new TypedQueue<number>();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.front()); // 10
console.log(q.dequeue()); // 10
console.log(q.size()); // 2
console.log(q.rear()); // 30
console.log(q.isEmpty()); // false
