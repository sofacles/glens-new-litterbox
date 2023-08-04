console.log("remove the nth node");

class LinkedList {
  constructor(arrNodes) {
    this.head = {};
    this.isEmpty = arrNodes.length === 0;
    let ptr = this.head;

    for (let n = 0; n < arrNodes.length; n++) {
      ptr.value = arrNodes[n];
      if (n === arrNodes.length - 1) {
        ptr.next = null;
        break;
      }
      ptr.next = {};
      ptr = ptr.next;
    }
  }

  printList() {
    console.log("printing the linked list");
    if (this.isEmpty) {
      console.log("List is empty.");
      return "";
    }
    let output = "";
    let ptr = this.head;
    console.log(ptr.value);
    output += `${ptr.value}, `;
    while (ptr.next !== null) {
      ptr = ptr.next;
      console.log(ptr.value);
      output += `${ptr.value}, `;
    }
    return output;
  }

  //if nfe = 2, then remove 2 from 1,2,3
  removeNthFromLast(nfe) {
    if (nfe < 1) {
      return;
    }
    if (this.isEmpty) {
      console.error(`List is empty Erroring out.`);
      return;
    }
    //first figure out the count of nodes in the list
    let ptr = this.head;
    let listLength = 1;
    while (ptr.next !== null) {
      listLength++;
      ptr = ptr.next;
    }

    if (nfe > listLength) {
      console.error(
        `there aren't even ${nfe} nodes in the list.  Erroring out.`
      );
      return;
    }

    //figure out what node to start at - the node before the node you want to to remove. So length - n - 1
    ptr = this.head;
    let i = 1;
    for (i; i < listLength - nfe; i++) {
      ptr = ptr.next;
    }
    //now pointer is pointing at the node just before what we want to remove
    //make that node's next point at the node after next
    //special case: ptr is at head, so we need to remove the head node
    //but ptr might have been incremented once, which means we're at the second node
    if (ptr === this.head && listLength === nfe) {
      this.head = ptr.next;
    } else {
      ptr.next = ptr.next?.next || null;
    }
  }
}

export default LinkedList;
