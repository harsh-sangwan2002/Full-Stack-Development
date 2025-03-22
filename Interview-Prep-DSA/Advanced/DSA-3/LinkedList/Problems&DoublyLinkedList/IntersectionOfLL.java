public class IntersectionOfLL {

    private int getSize(ListNode node) {

        if (node == null)
            return 0;

        int count = 0;
        ListNode curr = node;

        while (curr != null) {
            count++;
            curr = curr.next;
        }

        return count;
    }

    public ListNode getIntersectionNode(ListNode A, ListNode B) {

        ListNode h1 = A, h2 = B;
        int s1 = getSize(A), s2 = getSize(B);

        int delta = Math.abs(s1 - s2);

        if (s1 > s2) {

            for (int i = 0; i < delta; i++)
                h1 = h1.next;
        }

        else if (s2 > s1) {

            for (int i = 0; i < delta; i++)
                h2 = h2.next;
        }

        while (h1 != h2) {

            h1 = h1.next;
            h2 = h2.next;
        }

        return h1;
    }
}