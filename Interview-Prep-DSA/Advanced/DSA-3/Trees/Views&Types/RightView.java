import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

public class RightView {

    public int[] solve(TreeNode A) {

        List<Integer> list = new ArrayList<>();
        Queue<TreeNode> q = new ArrayDeque<>();
        q.add(A);

        while (q.size() != 0) {

            int n = q.size();

            for (int i = 1; i <= n; i++) {

                TreeNode node = q.remove();

                if (i == n)
                    list.add(node.val);

                if (node.left != null)
                    q.add(node.left);

                if (node.right != null)
                    q.add(node.right);
            }
        }

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
