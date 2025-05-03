import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

public class SerializeBinaryTree {

    public int[] solve(TreeNode A) {

        List<Integer> list = new ArrayList<>();
        Queue<TreeNode> q = new ArrayDeque<>();
        q.add(A);

        while (q.size() != 0) {

            TreeNode node = q.remove();
            list.add(node.val);

            if (node.val != -1) {

                if (node.left != null)
                    q.add(node.left);

                else
                    q.add(new TreeNode(-1));

                if (node.right != null)
                    q.add(node.right);

                else
                    q.add(new TreeNode(-1));
            }
        }

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
