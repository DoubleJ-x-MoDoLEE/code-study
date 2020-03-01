import {assert} from 'chai';

// Factory Pattern
const Queue = (..._items) => {

  let reverse = false; // encapsulation variable..
  let items = [..._items]; // encapsulation variable..

  function enqueue(...addItems) {
    return reverse ? items.unshift(...addItems) : items.push(...addItems);
  }

  function dequeue() {
    return reverse ? items.pop() : items.shift();
  }

  function setReverse(_reverse) {
    reverse = _reverse;
    return true;
  }

  function getItems() {
    return items;
  }

  return {
    enqueue,
    dequeue,
    setReverse,
    getItems
  }
};

test('Queue 데이터 enqueue Test (Right IN Left Out)', (done) => {
  const queue = Queue(1,2,3);
  queue.enqueue(4,5);
  assert.deepEqual(queue.getItems(), [1,2,3,4,5]);
  done();
});

test('Queue 데이터 dequeue Test (Right IN Left Out)', (done) => {
  const queue = Queue(1,2,3);
  queue.dequeue();
  assert.deepEqual(queue.getItems(), [2,3]);
  done();
});


test('Queue 데이터 enqueue Test (Left In Right Out)', (done) => {
  const queue = Queue(3,2,1);
  queue.setReverse(true);
  queue.enqueue(4,5);
  assert.deepEqual(queue.getItems(), [4,5,3,2,1]);
  done();
});

test('Queue 데이터 dequeue Test  (Left In Right Out)', (done) => {
  const queue = Queue(3,2,1);
  queue.setReverse(true);
  queue.dequeue();
  assert.deepEqual(queue.getItems(), [3,2]);
  done();
});


