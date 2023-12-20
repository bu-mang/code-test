// 덱 10866
let fs = require("fs");
let [amount, ...orders] = fs.readFileSync("input.txt").toString().trim().split("\n");

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
      return 1;
    } else {
      this.pushBack(item);
      return 0;
    }
  }

  peekFront() {
    return this.list[this.head + 1];
  }

  peekBack() {
    return this.list[this.tail - 1];
  }
}

const deque = new Deque();

let ans = "";
for (let order of orders) {
  let [cmd, value] = order.split(" ");
  if (value) {
    if (cmd === "push_back") {
      deque.pushBack(value);
    } else if (cmd === "push_front") {
      deque.pushFront(value);
    }
  } else if (cmd === "pop_front") {
    let item = deque.popFront();
    if (item) {
      ans += item + "\n";
    } else {
      ans += -1 + "\n";
    }
  } else if (cmd === "pop_back") {
    let item = deque.popBack();
    if (item) {
      ans += item + "\n";
    } else {
      ans += -1 + "\n";
    }
  } else if (cmd === "front") {
    let item = deque.peekFront();
    if (item) {
      ans += item + "\n";
    } else {
      ans += -1 + "\n";
    }
  } else if (cmd === "back") {
    let item = deque.peekBack();
    if (item) {
      ans += item + "\n";
    } else {
      ans += -1 + "\n";
    }
  } else if (cmd === "size") {
    ans += deque.getSize() + "\n";
  } else if (cmd === "empty") {
    ans += deque.isEmpty() + "\n";
  }
}
console.log(ans);
