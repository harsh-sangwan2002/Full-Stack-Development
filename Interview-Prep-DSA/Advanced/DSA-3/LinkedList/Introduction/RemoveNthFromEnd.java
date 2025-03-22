public class RemoveNthFromEnd {
    public ListNode removeNthFromEnd(ListNode A, int B) {

        ListNode fast = A;

        for (int i = 0; i <= B && fast != null; i++)
            fast = fast.next;

        if (fast == null)
            return A.next;

        ListNode slow = A;
        while (fast != null) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;
        return A;
    }
}
