package CopyList;

public class sol2 {

    public RandomListNode copyRandomList(RandomListNode A) {

        if (A == null)
            return A;

        RandomListNode curr = A;

        while (curr != null) {

            RandomListNode node = new RandomListNode(curr.label);
            node.next = curr.next;
            curr.next = node;

            curr = curr.next.next;
        }

        curr = A;
        while (curr != null) {

            if (curr.random != null)
                curr.next.random = curr.random.next;

            curr = curr.next.next;
        }

        curr = A;
        RandomListNode copiedHead = curr.next;
        RandomListNode currentCopied = copiedHead;

        while (curr != null) {

            curr.next = curr.next.next;

            if (copiedHead.next != null)
                copiedHead.next = copiedHead.next.next;

            curr = curr.next;
            copiedHead = copiedHead.next;
        }

        return currentCopied;
    }
}
