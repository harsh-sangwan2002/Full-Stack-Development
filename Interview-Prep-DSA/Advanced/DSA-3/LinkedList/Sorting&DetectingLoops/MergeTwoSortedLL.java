public class MergeTwoSortedLL {

    public ListNode mergeTwoLists(ListNode A, ListNode B) {

        if (A == null)
            return B;
        if (B == null)
            return A;

        ListNode head = null, tail = null, h1 = A, h2 = B;
        if (h1.val < h2.val) {
            head = h1;
            tail = h1;
            h1 = h1.next;
        }

        else {
            head = h2;
            tail = h2;
            h2 = h2.next;
        }

        while (h1 != null && h2 != null) {

            if (h1.val < h2.val) {
                tail.next = h1;
                h1 = h1.next;
            }

            else {
                tail.next = h2;
                h2 = h2.next;
            }

            tail = tail.next;
        }

        if (h1 == null)
            tail.next = h2;

        else if (h2 == null)
            tail.next = h1;

        return head;
    }
}
