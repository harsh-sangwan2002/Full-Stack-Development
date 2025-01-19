public class PartitionList {
    
    public ListNode partition(ListNode A, int B) {

        ListNode d1 = new ListNode(-1);
        ListNode h1 = d1, t1 = d1;

        ListNode d2 = new ListNode(-1);
        ListNode h2 = d2, t2 = d2;

        ListNode temp = A;
        while (temp != null) {

            ListNode curr = new ListNode(temp.val);

            if (curr.val < B) {
                t1.next = curr;
                t1 = t1.next;
            }

            else {
                t2.next = curr;
                t2 = t2.next;
            }

            temp = temp.next;
        }

        if (h1.next == null) {
            h1 = h2.next;
            return h1;
        }

        else
            t1.next = h2.next;

        return h1.next;
    }
}