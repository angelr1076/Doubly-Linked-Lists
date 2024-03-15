function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function MyLinkedList() {
  this.left = new Node(0);
  this.right = new Node(0);
  this.left.next = this.right; // dummy node last
  this.right.prev = this.left; // dummy node first
}

MyLinkedList.prototype.get = function (index) {
  let cur = this.left.next;

  while (cur && index > 0) {
    cur = cur.next;
    index -= 1;
  }

  if (cur && cur !== this.right && index === 0) {
    return cur.value;
  }

  return -1;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val);
  let next = this.left.next;
  let prev = this.left;

  prev.next = node;
  next.prev = node;
  node.next = next;
  node.prev = prev;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let node = new Node(val);
  let next = this.right;
  let prev = this.right.prev;

  prev.next = node;
  next.prev = node;
  node.next = next;
  node.prev = prev;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  let cur = this.left.next;

  while (cur && index > 0) {
    cur = cur.next;
    index -= 1;
  }

  if (cur && index == 0) {
    let node = new Node(val);
    let next = cur;
    let prev = cur.prev;

    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  let cur = this.left.next;

  while (cur && index > 0) {
    cur = cur.next;
    index -= 1;
  }

  // If @dummy node at the far right, do not delete
  if (cur && cur !== this.right && index == 0) {
    let next = cur.next;
    let prev = cur.prev;

    next.prev = prev;
    prev.next = next;
  }
};

MyLinkedList.prototype.printList = function () {
  let currentNode = this.left.next; // Start with the first real node
  let result = '';

  while (currentNode !== this.right) {
    // Stop at the sentinel tail node
    let prevValue =
      currentNode.prev.value !== undefined ? currentNode.prev.value : 'null';
    let nextValue =
      currentNode.next.value !== undefined ? currentNode.next.value : 'null';
    result += `{prev: ${prevValue}, value: ${currentNode.value}, next: ${nextValue}} <-> `;
    currentNode = currentNode.next;
  }

  console.log(result.slice(0, -5));
};

module.exports = MyLinkedList;
