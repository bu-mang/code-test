class Deque {
  constructor() {
    this.list = {};
    this.head = 0;
    this.tail = 1;
  }

  pushFront(item) {
    this.list[this.head] = item;
    this.head--;
  }

  pushBack(item) {
    this.list[this.tail] = item;
    this.tail++;
  }

  popFront() {
    let item = this.list[this.head + 1];
    if (item === undefined) return null;
    delete this.list[this.head + 1];
    this.head++;
    if (this.head === this.tail) this.tail++;
    return item;
  }

  popBack() {
    let item = this.list[this.tail - 1];
    if (item === undefined) return null;
    delete this.list[this.tail - 1];
    this.tail--;
    if (this.tail === this.head) this.head--;
    return item;
  }

  getSize() {
    return this.tail - this.head - 1;
  }

  isEmpty() {
    let item = this.popBack();
    if (item === null) {
      return true;
    } else {
      this.pushBack(item);
      return false;
    }
  }

  peekFront() {
    return this.list[this.head + 1];
  }

  peekBack() {
    return this.list[this.tail - 1];
  }
}
