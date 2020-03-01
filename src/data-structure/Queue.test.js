const Queue = (..._items) => {

  let reverse = false; // encapsulation variable..
  let items = [..._items]; // encapsulation variable..

  function enqueue(...addItems) {
    return reverse
  }

  function dequeue() {
    
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
    dequeue
  }
};
