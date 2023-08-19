import LinkedList from "./LinkedList";
const foo = jest.spyOn(console, "error");

describe("RemoveNthNode", () => {
  let linkedListUnderTest;
  describe(" and linked list does contain nodes", () => {
    beforeEach(() => {
      linkedListUnderTest = new LinkedList([1, 2, 3]);
    });

    test("when passed 1", () => {
      linkedListUnderTest.removeNthFromLast(1);
      expect(linkedListUnderTest.printList()).toEqual("1, 2, ");
    });

    test("when passed 2", () => {
      linkedListUnderTest.removeNthFromLast(2);
      expect(linkedListUnderTest.printList()).toEqual("1, 3, ");
    });

    test("when passed 3", () => {
      linkedListUnderTest.removeNthFromLast(3);
      expect(linkedListUnderTest.printList()).toEqual("2, 3, ");
    });

    test("when passed an index that's greater than the number of nodes", () => {
      linkedListUnderTest.removeNthFromLast(4);
      expect(foo).toHaveBeenCalledWith(
        "there aren't even 4 nodes in the list.  Erroring out."
      );
      expect(linkedListUnderTest.printList()).toEqual("1, 2, 3, ");
    });
  });

  describe(" and linked list is empty", () => {
    beforeEach(() => {
      linkedListUnderTest = new LinkedList([]);
    });

    test("when passed 0", () => {
      linkedListUnderTest.removeNthFromLast(0);
      expect(linkedListUnderTest.printList()).toEqual("");
    });

    test("when passed an index that's greater than the number of nodes", () => {
      linkedListUnderTest.removeNthFromLast(1);
      expect(foo).toHaveBeenCalledWith("List is empty Erroring out.");
      expect(linkedListUnderTest.printList()).toEqual("");
    });
  });
});
