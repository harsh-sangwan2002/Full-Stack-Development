package NextPointer;

public class sol2 {

    public void connect(TreeLinkNode root) {

        if (root == null)
            return;

        TreeLinkNode curr = root;

        while (curr.left != null) {

            TreeLinkNode temp = curr;

            while (curr != null) {

                curr.left.next = curr.right;

                if (curr.next != null)
                    curr.right.next = curr.next.left;

                curr = curr.next;
            }

            curr = temp.left;
        }

    }
}
