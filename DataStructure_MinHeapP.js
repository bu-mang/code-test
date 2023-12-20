class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    // 현재 넣은 index
    let parIdx = (curIdx / 2) >> 0;
    // 부모 index는 2를 나누고 소수점을 버린 값이다.

    /*
      트리구조에서 자기 아래 있는 노드는 
      parseInt(상위 노드 / 2)이다.

            1
        2       3
      4   5  6    7
    
    */
    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      // 부모가 자식보다 크면 바꾼다
      // => 루트로 갈수록 작아지게 유지한다.
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();
    // 인자가 2개 이상 있으면 루트노드를 가장 최근 노드와 바꾼다.

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    // 왼쪽 자식이 없다면 더 이상 말단 노드가 없단 뜻이므로 min을 반환
    if (!this.heap[rightIdx]) {
      // 왼쪽 자식은 있고 오른쪽 자식이 없다면, 왼쪽 자식과 부모를 교체. 이미 push할때 말단이 가장 높은 값으로 맞춰져 있기 때문에, 말단이 부모가 된 후 자식보다 크다는 것은 보장되어있다.
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
      const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    } // 만약 this.heap[leftIdx]나 this.heap[rightIdx]이 undefined라면 자연스레 반복이 종료된다.

    return min;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMax() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const max = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return max;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return max;
    }

    while (this.heap[leftIdx] > this.heap[curIdx] || this.heap[rightIdx] > this.heap[curIdx]) {
      let maxIdx = this.heap[rightIdx] > this.heap[leftIdx] ? rightIdx : leftIdx;
      // 오른쪽 자식이 undefined일 가능성을 배제하도록 삼항조건문을 짜야 버그가 없다.
      this.swap(maxIdx, curIdx);
      curIdx = maxIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return max;
  }
}

const minHeap = new MinHeap();
minHeap.heappush(1);
minHeap.heappush(2);
minHeap.heappush(3);
minHeap.heappush(100);
minHeap.heappush(4);
minHeap.heappush(8);
minHeap.heappush(16);
minHeap.heappush(24);
minHeap.heappush(72);
minHeap.heappush(32);
minHeap.heappush(2);

console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
