public class KthSmallest {

    public int kthsmallest(TreeNode A, int B) {

        TreeNode curr = A;
        while (curr != null) {

            if (curr.left == null) {

                B--;

                if (B == 0)
                    return curr.val;

                curr = curr.right;
            }

            else {

                TreeNode temp = curr.left;
                while (temp.right != null && temp.right != curr)
                    temp = temp.right;

                if (temp.right == null) {
                    temp.right = curr;
                    curr = curr.left;
                }

                else {

                    temp.right = null;
                    B--;

                    if (B == 0)
                        return curr.val;

                    curr = curr.right;
                }
            }
        }

        return -1;
    }
}
