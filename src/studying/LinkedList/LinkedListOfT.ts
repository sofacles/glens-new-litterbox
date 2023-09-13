class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(val: T, next: ListNode<T> | null = null) {
    this.value = val!;
    this.next = next;
  }
}

class LinkedList<T> {
  head: ListNode<T>;
  constructor(list: T[]) {
    this.head = new ListNode<T>(list[0]);
    let h = this.head;
    for (let i = 1; i < list.length; i++) {
      h.next = new ListNode(list[i]);
      h = h.next;
    }
  }

  print() {
    let node: ListNode<T> | null = this.head;
    console.log(`print the linked list`);
    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }
  }
}

class Animal {
  species: string;
  constructor(s: string) {
    this.species = s;
  }
}

const ape = new Animal("Troglodytes");
const bee = new Animal("Corniformes");
const cat = new Animal("Felix");

const animals = [ape, bee, cat];

const myLinkedList = new LinkedList<Animal>(animals);
myLinkedList.print();

export { myLinkedList };
