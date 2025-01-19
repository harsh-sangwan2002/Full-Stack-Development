public class SwapNodesInPairs {

    public ListNode swapPairs(ListNode A) {

        if (A == null || A.next == null)
            return A;

        ListNode h2 = A.next.next;
        h2 = swapPairs(h2);

        ListNode node = A.next;
        A.next = h2;
        node.next = A;

        return node;
    }
}