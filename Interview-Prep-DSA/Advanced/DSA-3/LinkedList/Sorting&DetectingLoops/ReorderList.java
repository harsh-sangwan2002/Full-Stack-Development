public class ReorderList {

    private ListNode findMid(ListNode node) {

        if (node == null || node.next == null)
            return node;

        ListNode slow = node;
        ListNode fast = node;

        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

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

    public ListNode reorderList(ListNode A) {

        if (A == null || A.next == null)
            return A;

        ListNode mid = findMid(A);
        ListNode h2 = mid.next;
        mid.next = null;

        h2 = reverse(h2);
        ListNode h1 = A;

        boolean flag = true;

        while (h1 != null && h2 != null) {

            if (flag) {
                ListNode node = h1.next;
                h1.next = h2;
                h1 = node;
            }

            else {
                ListNode node = h2.next;
                h2.next = h1;
                h2 = node;
            }

            flag = !flag;
        }

        return A;
    }
}