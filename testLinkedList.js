const MyLinkedList = require('./index');

let list = new MyLinkedList();

// Test adding elements
list.addAtHead(1);
list.addAtTail(3);

console.log('After adding 1 at head and 3 at tail:');
list.printList(); // Expected: {prev: null, value: 1, next: 3} <-> {prev: 1, value: 3, next: null}

// Test inserting elements
list.addAtIndex(1, 2);
console.log('After inserting 2 at index 1:');
list.printList(); // Expected: {prev: null, value: 1, next: 2} <-> {prev: 1, value: 2, next: 3} <-> {prev: 2, value: 3, next: null}

// Test getting elements
console.log('Value at index 1:', list.get(1)); // Expected: 2

// Test deleting an element
list.deleteAtIndex(1);
console.log('After deleting value at index 1:');
list.printList(); // Expected: {prev: null, value: 1, next: 3} <-> {prev: 1, value: 3, next: null}
