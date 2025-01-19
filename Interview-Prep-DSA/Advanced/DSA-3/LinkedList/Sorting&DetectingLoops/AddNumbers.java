public class AddNumbers {
    
    public ListNode addTwoNumbers(ListNode A, ListNode B) {

        if (A == null)
            return B;
        if (B == null)
            return A;

        ListNode temp = new ListNode(-1);
        ListNode head = temp, h1 = A, h2 = B;

        int carry = 0;

        while (h1 != null || h2 != null || carry != 0) {

            int d1 = h1 == null ? 0 : h1.val;
            int d2 = h2 == null ? 0 : h2.val;
            int sum = d1 + d2 + carry;

            int digit = sum % 10;
            carry = sum / 10;

            ListNode node = new ListNode(digit);
            temp.next = node;
            temp = temp.next;

            if (h1 != null)
                h1 = h1.next;
            if (h2 != null)
                h2 = h2.next;
        }

        return head.next;
    }
}