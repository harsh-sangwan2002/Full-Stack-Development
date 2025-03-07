public class RemoveDups {

    public ListNode deleteDuplicates(ListNode A) {

        if (A == null || A.next == null)
            return A;

        ListNode temp = A;

        while (temp != null && temp.next != null) {

            if (temp.val == temp.next.val)
                temp.next = temp.next.next;

            else
                temp = temp.next;
        }

        return A;
    }
}
