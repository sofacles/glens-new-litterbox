import { LinkedList, ListNode } from "./LinkedList2";
import MergeKSorted from "./MergeKSortedLists";

describe("ListNode", () => {
  let listNodeUnderTest;
  describe(" and linked list does contain nodes", () => {
    beforeEach(() => {
      listNodeUnderTest = new ListNode(1, null);
    });

    test("when passed 1", () => {
      expect(listNodeUnderTest.get().val).toEqual(1);
    });
  });
});

describe("LinkedList", () => {
  let linkedListUnderTest;
  describe("passed an empty array", () => {
    beforeEach(() => {
      linkedListUnderTest = new LinkedList([]);
    });
    it("isEmpty should return true", () => {
      expect(linkedListUnderTest.isEmpty()).toBe(true);
    });
  });

  describe("passed an array of one number", () => {
    beforeEach(() => {
      linkedListUnderTest = new LinkedList([1]);
    });
    it("isEmpty should return false", () => {
      expect(linkedListUnderTest.isEmpty()).toBe(false);
    });
    it("print should print out the numbers in order", () => {
      expect(linkedListUnderTest.print()).toBe(`val: 1, `);
    });
  });

  describe("passed an array of numbers", () => {
    beforeEach(() => {
      linkedListUnderTest = new LinkedList([1, 2]);
    });
    it("isEmpty should return false", () => {
      expect(linkedListUnderTest.isEmpty()).toBe(false);
    });
    it("print should print out the numbers in order", () => {
      expect(linkedListUnderTest.print()).toBe(`val: 1, val: 2, `);
    });
  });

  describe("peek", () => {
    beforeEach(() => {
      linkedListUnderTest = new LinkedList([3, 5, 6]);
    });
    it("should tell you what the value at Head is", () => {
      expect(linkedListUnderTest.peek()).toBe(3);
    });

    it("should preserve the contents of the list", () => {
      expect(linkedListUnderTest.print()).toBe(`val: 3, val: 5, val: 6, `);
    });
  });

  describe("pop", () => {
    beforeEach(() => {
      linkedListUnderTest = new LinkedList([3, 5, 6]);
    });
    it("should tell you what the value at Head is", () => {
      expect(linkedListUnderTest.pop().val).toBe(3);
    });

    it("should update the contents of the list", () => {
      expect(linkedListUnderTest.pop().val).toBe(3);
      expect(linkedListUnderTest.print()).toBe(`val: 5, val: 6, `);
    });

    it("should eventually empty the list", () => {
      expect(linkedListUnderTest.pop().val).toBe(3);
      expect(linkedListUnderTest.pop().val).toBe(5);
      expect(linkedListUnderTest.pop().val).toBe(6);
      expect(linkedListUnderTest.isEmpty()).toBe(true);
    });
  });

  describe("addToEnd", () => {
    describe("when the list is empty", () => {
      beforeEach(() => {
        linkedListUnderTest = new LinkedList([]);
        linkedListUnderTest.addToEnd(new ListNode(1));
      });

      it("should preserve the contents of the list", () => {
        expect(linkedListUnderTest.print()).toBe(`val: 1, `);
      });
    });

    describe("when the list is non-empty", () => {
      beforeEach(() => {
        linkedListUnderTest = new LinkedList([3]);
        linkedListUnderTest.addToEnd(new ListNode(1));
      });

      it("should preserve the contents of the list", () => {
        expect(linkedListUnderTest.print()).toBe(`val: 3, val: 1, `);
      });
    });
  });

  describe("merge two lists", () => {
    let merged;
    describe("Two linkedLists, but one is empty", () => {
      beforeEach(() => {
        const a = new LinkedList([]);
        const b = new LinkedList([2]);

        merged = MergeKSorted([a, b]);
      });

      it("should preserve the contents of the list", () => {
        expect(merged.print()).toBe(`val: 2, `);
      });
    });

    describe("two LinkedLists with no duplicates across them", () => {
      beforeEach(() => {
        const a = new LinkedList([1]);
        const b = new LinkedList([2]);

        merged = MergeKSorted([a, b]);
      });

      it("should preserve the contents of the list", () => {
        expect(merged.print()).toBe(`val: 1, val: 2, `);
      });
    });

    describe("two LinkedLists with duplicates across them", () => {
      beforeEach(() => {
        const a = new LinkedList([1]);
        const b = new LinkedList([1, 2]);

        merged = MergeKSorted([a, b]);
      });

      it("should preserve the contents of the list", () => {
        expect(merged.print()).toBe(`val: 1, val: 1, val: 2, `);
      });
    });

    describe("two LinkedLists that are kind of interleaved", () => {
      beforeEach(() => {
        const a = new LinkedList([2, 4]);
        const b = new LinkedList([1, 3]);
        merged = MergeKSorted([a, b]);
      });

      it("should preserve the contents of the list", () => {
        expect(merged.print()).toBe(`val: 1, val: 2, val: 3, val: 4, `);
      });
    });

    describe("two LinkedLists that are kind of interleaved and have some dupes", () => {
      beforeEach(() => {
        const a = new LinkedList([2, 4]);
        const b = new LinkedList([1, 2, 3]);
        merged = MergeKSorted([a, b]);
      });

      it("should preserve the contents of the list", () => {
        expect(merged.print()).toBe(`val: 1, val: 2, val: 2, val: 3, val: 4, `);
      });
    });

    describe("two LinkedLists with gaps", () => {
      beforeEach(() => {
        const a = new LinkedList([6, 8]);
        const b = new LinkedList([1, 3]);
        merged = MergeKSorted([a, b]);
      });

      it("should preserve the contents of the list", () => {
        expect(merged.print()).toBe(`val: 1, val: 3, val: 6, val: 8, `);
      });
    });

    describe("two LinkedLists with with different lengths", () => {
      beforeEach(() => {
        const a = new LinkedList([6, 7, 8, 9]);
        const b = new LinkedList([1, 3]);
        merged = MergeKSorted([a, b]);
      });

      it("should preserve the contents of the list", () => {
        expect(merged.print()).toBe(
          "val: 1, val: 3, val: 6, val: 7, val: 8, val: 9, "
        );
      });
    });

    describe("three LinkedLists that are kind of interleaved", () => {
      beforeEach(() => {
        const a = new LinkedList([9, 14]);
        const b = new LinkedList([1, 2, 3, 5]);
        const c = new LinkedList([6, 8]);
        merged = MergeKSorted([a, b, c]);
      });

      it("should preserve the contents of the list", () => {
        expect(merged.print()).toBe(
          "val: 1, val: 2, val: 3, val: 5, val: 6, val: 8, val: 9, val: 14, "
        );
      });
    });
  });
});
