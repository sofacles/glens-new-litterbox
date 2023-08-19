import { LinkedList, ListNode } from "./LinkedList2";

describe("LinkedList", () => {
  let linkedListUnderTest;

  describe("pop", () => {
    beforeEach(() => {
      linkedListUnderTest = new LinkedList([3, 5, 6]);
    });

    it("should update the contents of the list", () => {
      const popped = linkedListUnderTest.pop();
      expect(popped.val).toBe(3);
      debugger;
      expect(linkedListUnderTest.print()).toBe(`val: 5, val: 6, `);
    });
  });
});
