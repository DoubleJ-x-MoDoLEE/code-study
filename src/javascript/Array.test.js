let arr = [];

beforeAll(() => {
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }
});

test('Array.prototype.reverse 테스트', (done) => {
  console.log('Reverse 전 : ', arr);
  console.log('Reverse 후 : ', arr.reverse());
  done();
});


test('Array.prototype.push 테스트', (done) => {
  console.log('push 전 : ', arr);
  console.log('push 아이템 : ', arr.push(11));
  console.log('push 후 arr : ', arr);
  done();
});

test('Array.prototype.pop 테스트', (done) => {
  console.log('Pop 전 : ', arr);
  console.log('Pop 아이템 : ', arr.pop());
  console.log('Pop 후 arr : ', arr);
  done();
});

test('Array.prototype.shift 테스트', (done) => {
  console.log('shift 전 : ', arr);
  console.log('shift 아이템 : ', arr.shift());
  console.log('shift 후 : ', arr);
  done();
});

test('Array.prototype.unshift 테스트', (done) => {
  console.log('unshift 전 : ', arr);
  console.log('unshift 후 arr length : ', arr.unshift(11, 12));
  console.log('unshift 후 : ', arr);
  done();
});
