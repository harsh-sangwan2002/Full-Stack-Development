public class KReverseList {

    private ListNode reverse(ListNode node) {

        if (node == null || node.next == null)
            return node;

        ListNode prev = null, curr = node;
        while (curr != null) {

            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    public ListNode reverseList(ListNode A, int B) {

        if (A == null || A.next == null)
            return A;

        ListNode temp = A;

        for (int i = 0; i < B - 1; i++)
            temp = temp.next;

        ListNode h2 = temp.next;
        temp.next = null;

        h2 = reverseList(h2, B);
        ListNode h1 = reverse(A);

        A.next = h2;
        return h1;
    }
}
