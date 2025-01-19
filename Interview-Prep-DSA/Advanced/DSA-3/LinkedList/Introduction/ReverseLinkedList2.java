public class ReverseLinkedList2 {

    private ListNode reverse(ListNode root) {

        if (root == null || root.next == null)
            return root;

        ListNode prev = null, curr = root;

        while (curr != null) {

            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    public ListNode reverseBetween(ListNode A, int B, int C) {

        if (A.next == null || B >= C)
            return A;

        ListNode first = null, from = null, to = null, last = null;
        ListNode curr = A, head = A;

        int count = 0;

        while (curr != null) {

            count++;

            if (count < B)
                first = curr;

            else if (count == B)
                from = curr;

            if (count == C) {
                to = curr;
                last = curr.next;
                to.next = null;
                break;
            }

            curr = curr.next;
        }

        ListNode h2 = reverse(from);

        if (first == null)
            head = h2;

        else
            first.next = h2;

        from.next = last;

        return head;
    }
}
