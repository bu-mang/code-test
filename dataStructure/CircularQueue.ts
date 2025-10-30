class CircularQueue<T> {
  private buf: (T | undefined)[];
  private head = 0;
  private tail = 0;
  private count = 0;

  constructor(capacity = 16) {
    // capacity는 2의 거듭제곱 권장(모듈로 최적화에 유리)
    this.buf = new Array(capacity);
  }

  get size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  capacity() {
    return this.buf.length;
  }

  enqueue(x: T) {
    if (this.count === this.buf.length) this.grow();
    this.buf[this.tail] = x;
    this.tail = (this.tail + 1) % this.buf.length;
    this.count++;
  }

  dequeue(): T | undefined {
    if (this.count === 0) return undefined;
    const v = this.buf[this.head];
    this.buf[this.head] = undefined; // GC 도움
    this.head = (this.head + 1) % this.buf.length;
    this.count--;
    return v;
  }

  front(): T | undefined {
    return this.count ? this.buf[this.head] : undefined;
  }

  rear(): T | undefined {
    return this.count
      ? this.buf[(this.tail - 1 + this.buf.length) % this.buf.length]
      : undefined;
  }

  private grow() {
    const old = this.buf;
    const n = old.length;
    const nn = n << 1; // 2배 (비트 시프트. 기본적으로 * 2 랑 동일.)
    const next = new Array<T | undefined>(nn);
    // head부터 size만큼 순서대로 복사
    for (let i = 0; i < this.count; i++) {
      next[i] = old[(this.head + i) % n];
    }
    this.buf = next;
    this.head = 0;
    this.tail = this.count;
  }
}
