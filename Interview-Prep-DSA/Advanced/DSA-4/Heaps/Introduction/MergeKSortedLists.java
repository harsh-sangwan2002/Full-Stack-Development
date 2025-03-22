import java.util.ArrayList;
import java.util.PriorityQueue;

public class MergeKSortedLists {

    public ListNode mergeKLists(ArrayList<ListNode> a) {

        ListNode temp = new ListNode(-1);
        ListNode head = temp;

        PriorityQueue<ListNode> pq = new PriorityQueue<>((l1, l2) -> l1.val - l2.val);

        for (ListNode node : a)
            pq.add(node);

        while (pq.size() != 0) {

            ListNode node = pq.remove();
            temp.next = node;
            temp = temp.next;

            if (node.next != null)
                pq.add(node.next);
        }

        return head.next;
    }
}
