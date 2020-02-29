import {assert} from 'chai';

class Stack {
  constructor(...items) {
    this.reverse = false;
    this.stack = [...items];
  }

  push(...pushItems) {
    console.log(this.reverse);
    return this.reverse ? this.stack.unshift(...pushItems) : this.stack.push(...pushItems);
  }

  pop() {
    return this.reverse ? this.stack.shift() : this.stack.pop();
  }

  getItems() {
    return this.stack;
  }

}

test('Stack 구현 ( 우측 - Top ) Push 확인', (done) => {
  const stack = new Stack(1,2,3);
  stack.push(4,5);
  assert.deepEqual(stack.getItems(), [1,2,3,4,5]);
  done();
});

test('Stack 구현 ( 좌측 - Top ) Push 확인', (done) => {
  const stack = new Stack(1,2,3);
  stack.reverse = true;
  stack.push(4,5);
  assert.deepEqual(stack.getItems(), [4,5,1,2,3]);
  done();
});

test('Stack 구현 ( 우측 - Top ) Pop 확인', (done) => {
  const stack = new Stack(1,2,3);
  stack.pop();
  assert.deepEqual(stack.getItems(), [1,2]);
  done();
});

test('Stack 구현 ( 좌측 - Top ) Push 확인', (done) => {
  const stack = new Stack(1,2,3);
  stack.reverse = true;
  stack.pop();
  assert.deepEqual(stack.getItems(), [2,3]);
  done();
});



