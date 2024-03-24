class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // while문을 탈출한 다음은 next가 null인 상태!
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;
    return this.length; // add하면서 길이 늘어나는거 확인하라고 length 반환.
  }

  // search(index) {
  //   let count = 0;
  //   let current = this.head;

  //   while (count < index) {
  //     current = current?.next;
  //     count++;
  //   }
  //   return current?.value;
  // }
  search(index) {
    return this.#search(index)[1]?.value;
  }
  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return [prev, current];
  }

  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current?.next;
      this.length--;
      return this.length;
    } else if (current) {
      // index가 0일 때,
      this.head = current.next;
    }
    // 삭제하고자 하는 대상이 없을 때,
    // 아무것도 안 함
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const ll = new LinkedList();
ll.legnth;
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
console.log(ll.search(6)); // undefined
ll.remove(4);
console.log(ll.search(4)); // 6
ll.remove(4);
console.log(ll.search(4)); // undefined
console.log(ll.remove(4)); // undefined
console.log("hi");
