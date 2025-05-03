public class RemoveLoop {

    public ListNode solve(ListNode A) {

        if (A == null || A.next == null)
            return A;

        boolean hasCycle = false;
        ListNode slow = A, fast = A;

        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }

        if (!hasCycle)
            return A;

        slow = A;

        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }

        ListNode temp = slow;
        while (temp.next != slow)
            temp = temp.next;

        temp.next = null;
        return A;
    }
}