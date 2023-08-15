/**
 * This  definition comes from LeetCode and I would use it to solve the merge k sorted lists problem
 *
 * But how am I supposed to use this?  Every time I call ListNode (with or without "new"), I will be overwriting a single pair of global variables:
 * val and next. I don't see how I could make a linked list any longer than one node except by doing somthing like:
 *
 * var node3 = {val: 3, next: null}
 * var node2 = {val: 2, next: node3}
 * var node1 = {val: 1, next: node2}
 * and then use call() or bind() or something to  manage the thises.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
   }


 *  */

function ListNode(val, next = null) {
  var _val = val;
  var _next = next;
  return {
    get: function () {
      console.log(`val: ${val}, next: ${JSON.stringify(next)}`);
      return { val, next };
    },
    val: _val,
    next: _next,
  };
}

function LinkedList(values) {
  let head;
  if (!values || values.length == 0) {
    head = null;
  } else {
    head = ListNode(values[0]);
    let currentNode = head;

    for (var i = 1; i < values.length; i++) {
      const theNext1 = ListNode(values[i]);
      currentNode.next = theNext1;
      currentNode = currentNode.next;
    }
  }

  function peek() {
    return head ? head.val : null;
  }

  function pop() {
    if (isEmpty()) {
      return null;
    }
    //make a copy so you don't return the whole list.  Why did it work with retVal = head and then setting head = head.next.  Shouldn't retVal also
    // have been pointing at head.next?  Is there some kind of shallow copy going on.
    const retVal = new ListNode(head.val);
    if (head.next !== null) {
      head = head.next;
    } else {
      head = null;
    }
    return retVal;
  }

  function addToEnd(listNode) {
    if (isEmpty()) {
      head = listNode;
    } else {
      let ptr = head;
      while (ptr.next !== null) {
        ptr = ptr.next;
      }
      ptr.next = listNode;
    }
  }

  function isEmpty() {
    return head === null;
  }

  function print() {
    if (isEmpty()) {
      console.log("List is empty");
    } else {
      let currentNode = head;
      let retVal = "";
      while (currentNode !== null) {
        retVal += `val: ${currentNode.val}, `;
        currentNode = currentNode.next;
      }
      console.log(retVal);
      return retVal;
    }
  }

  return {
    addToEnd,
    isEmpty,
    peek,
    print,
    pop,
  };
}

export { ListNode, LinkedList };
