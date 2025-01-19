public class ReverseLinkedList {

    public ListNode reverseList(ListNode A) {

        if (A == null || A.next == null)
            return A;

        ListNode prev = null, curr = A;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}
