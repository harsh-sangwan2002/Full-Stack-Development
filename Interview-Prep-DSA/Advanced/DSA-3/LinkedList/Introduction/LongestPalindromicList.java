public class LongestPalindromicList {

    private int count(ListNode h1, ListNode h2) {

        int count = 0;

        while (h1 != null && h2 != null) {

            if (h1.val != h2.val)
                return count;

            h1 = h1.next;
            h2 = h2.next;
            count++;
        }

        return count;
    }

    public int solve(ListNode A) {

        if (A == null)
            return 0;

        ListNode prev = null, curr = A;
        int max = 0;

        while (curr != null) {

            ListNode next = curr.next;
            curr.next = prev;

            // odd length
            max = Math.max(max, 2 * count(prev, next) + 1);

            // even length
            max = Math.max(max, 2 * count(curr, next));

            prev = curr;
            curr = next;
        }

        return max;
    }
}
