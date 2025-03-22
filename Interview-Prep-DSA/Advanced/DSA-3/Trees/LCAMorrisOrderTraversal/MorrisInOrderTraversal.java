import java.util.ArrayList;
import java.util.List;

public class MorrisInOrderTraversal {

    public int[] solve(TreeNode A) {

        List<Integer> list = new ArrayList<>();
        TreeNode curr = A;

        while (curr != null) {

            if (curr.left == null) {
                list.add(curr.val);
                curr = curr.right;
            }

            else {

                TreeNode node = curr.left;
                while (node.right != null && node.right != curr)
                    node = node.right;

                if (node.right == null) {
                    node.right = curr;
                    curr = curr.left;
                }

                else {
                    node.right = null;
                    list.add(curr.val);
                    curr = curr.right;
                }
            }
        }

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
