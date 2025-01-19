public class SortList {

    private ListNode findMid(ListNode node) {

        if (node == null || node.next == null)
            return node;

        ListNode slow = node, fast = node;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    private ListNode merge(ListNode A, ListNode B) {

        if (A == null)
            return B;
        if (B == null)
            return A;

        ListNode head = null, tail = null, h1 = A, h2 = B;

        if (h1.val < h2.val) {
            head = tail = h1;
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

    public ListNode sortList(ListNode A) {

        if (A == null || A.next == null)
            return A;

        ListNode mid = findMid(A);
        ListNode h2 = mid.next;
        mid.next = null;

        ListNode h1 = sortList(A);
        h2 = sortList(h2);

        return merge(h1, h2);
    }
}
