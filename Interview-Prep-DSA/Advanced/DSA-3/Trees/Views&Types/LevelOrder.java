import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

public class LevelOrder {

    public int[][] solve(TreeNode A) {

        List<List<Integer>> list = new ArrayList<>();
        Queue<TreeNode> q = new ArrayDeque<>();
        q.add(A);

        while (q.size() != 0) {

            int n = q.size();
            List<Integer> temp = new ArrayList<>();

            while (n-- > 0) {

                TreeNode node = q.remove();
                temp.add(node.val);

                if (node.left != null)
                    q.add(node.left);

                if (node.right != null)
                    q.add(node.right);
            }

            list.add(temp);
        }

        int[][] res = new int[list.size()][];
        int idx1 = 0;

        for (List<Integer> temp : list) {

            int[] arr = new int[temp.size()];
            int idx2 = 0;

            for (int val : temp)
                arr[idx2++] = val;

            res[idx1++] = arr;
        }

        return res;
    }
}
