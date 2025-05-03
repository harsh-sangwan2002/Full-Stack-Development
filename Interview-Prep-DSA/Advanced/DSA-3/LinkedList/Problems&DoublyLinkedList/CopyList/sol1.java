package CopyList;

import java.util.HashMap;

public class sol1 {

    public RandomListNode copyRandomList(RandomListNode A) {

        RandomListNode head = new RandomListNode(A.label);
        HashMap<RandomListNode, RandomListNode> map = new HashMap<>();
        map.put(A, head);
        RandomListNode curr = A.next;

        while (curr != null) {

            RandomListNode node = new RandomListNode(curr.label);
            head.next = node;
            map.put(curr, node);
            head = head.next;
            curr = curr.next;
        }

        curr = A;
        while (curr != null) {
            RandomListNode random = curr.random;
            map.get(curr).random = map.get(random);
            curr = curr.next;
        }

        return map.get(A);
    }
}
