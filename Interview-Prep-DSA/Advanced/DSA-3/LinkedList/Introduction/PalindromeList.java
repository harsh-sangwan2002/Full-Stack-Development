public class PalindromeList {

    private ListNode findMid(ListNode node) {

        if (node == null)
            return null;

        ListNode slow = node, fast = node;

        while (fast.next != null && fast.next.next != null) {

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

    public int lPalin(ListNode A) {

        if (A == null || A.next == null)
            return 1;

        ListNode mid = findMid(A);
        ListNode node = mid.next;
        mid.next = null;

        node = reverse(node);
        ListNode l1 = A, l2 = node;

        while (l1 != null && l2 != null) {

            if (l1.val != l2.val)
                return 0;

            if (l1 != null)
                l1 = l1.next;
            if (l2 != null)
                l2 = l2.next;
        }

        return 1;
    }
}
