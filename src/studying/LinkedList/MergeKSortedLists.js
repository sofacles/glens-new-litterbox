import { LinkedList } from "./LinkedList2";

const MergeKSorted = (linkedLists) => {
  const anyNodesLeft = () => linkedLists.some((list) => !list.isEmpty());

  const getLowestHead = (linkedLists) => {
    let retVal = NaN;
    let lowest;
    try {
      lowest = linkedLists
        .filter((list) => !list.isEmpty())
        .sort((a, b) => {
          //peek returns null when the list is empty
          if (a.peek() === null) {
            return -1;
          }
          if (b.peek() === null) {
            return 1;
          }

          retVal = a.peek() < b.peek() ? -1 : 1;
          return retVal;
        });
    } catch (err) {
      console.error(err);
    }
    return lowest[0];
  };

  let mergedList = LinkedList([]);

  while (anyNodesLeft()) {
    let lowestN = getLowestHead(linkedLists);
    mergedList.addToEnd(lowestN.pop());
  }
  return mergedList;
};

export default MergeKSorted;
