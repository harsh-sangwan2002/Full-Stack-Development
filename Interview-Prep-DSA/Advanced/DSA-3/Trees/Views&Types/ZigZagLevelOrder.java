import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

public class ZigZagLevelOrder {

    public int[][] zigzagLevelOrder(TreeNode A) {

        List<List<Integer>> list = new ArrayList<>();
        Deque<TreeNode> q = new ArrayDeque<>();
        q.addLast(A);
        boolean flag = true;

        while (!q.isEmpty()) {

            int n = q.size();
            List<Integer> temp = new ArrayList<>();

            if (flag) {
                for (int i = 1; i <= n; i++) {
                    TreeNode node = q.removeFirst();
                    temp.add(node.val);

                    if (node.left != null)
                        q.addLast(node.left);
                    if (node.right != null)
                        q.addLast(node.right);
                }
            } else {
                for (int i = 1; i <= n; i++) {
                    TreeNode node = q.removeLast();
                    temp.add(node.val);

                    if (node.right != null)
                        q.addFirst(node.right);
                    if (node.left != null)
                        q.addFirst(node.left);
                }
            }

            flag = !flag;
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
