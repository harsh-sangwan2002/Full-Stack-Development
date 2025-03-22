public class LinkedList {

    static class ListNode {

        int val;
        ListNode next;

        ListNode(int val) {
            this.val = val;
            this.next = null;
        }
    }

    static ListNode head = null;
    static int size = 0;

    public static void insert_node(int position, int value) {
        // @params position, integer
        // @params value, integer
        if (position >= 1 && position <= size + 1) {

            ListNode node = new ListNode(value);

            if (position == 1) {
                node.next = head;
                head = node;
            }

            else {

                ListNode temp = head;

                for (int i = 1; i < position - 1; i++)
                    temp = temp.next;

                node.next = temp.next;
                temp.next = node;
            }

            size++;
        }
    }

    public static void delete_node(int position) {
        // @params position, integer
        if (position >= 1 && position <= size) {

            if (size == 1) {
                head = null;
                size--;
                return;
            }

            else if (position == 1) {
                head = head.next;
                size--;
                return;
            }

            ListNode temp = head;

            for (int i = 1; i < position - 1; i++)
                temp = temp.next;

            temp.next = temp.next.next;
            size--;
        }
    }

    public static void print_ll() {
        // Output each element followed by a space
        ListNode temp = head;

        while (temp != null) {

            if (temp.next == null)
                System.out.print(temp.val);

            else
                System.out.print(temp.val + " ");

            temp = temp.next;
        }
    }

}