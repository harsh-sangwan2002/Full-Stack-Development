import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Queue;

public class VerticalOrder {

    class Pair {

        TreeNode node;
        int lvl;

        Pair(TreeNode node, int lvl) {
            this.node = node;
            this.lvl = lvl;
        }
    }

    public int[][] verticalOrderTraversal(TreeNode A) {

        HashMap<Integer, List<Integer>> map = new HashMap<>();
        Queue<Pair> q = new ArrayDeque<>();
        q.add(new Pair(A, 0));

        int minL = Integer.MAX_VALUE, maxL = Integer.MIN_VALUE;

        while (q.size() != 0) {

            Pair top = q.remove();

            if (map.containsKey(top.lvl)) {
                List<Integer> list = map.get(top.lvl);
                list.add(top.node.val);
                map.put(top.lvl, list);
            }

            else {
                List<Integer> list = new ArrayList<>();
                list.add(top.node.val);
                map.put(top.lvl, list);
            }

            minL = Math.min(minL, top.lvl);
            maxL = Math.max(maxL, top.lvl);

            if (top.node.left != null)
                q.add(new Pair(top.node.left, top.lvl - 1));

            if (top.node.right != null)
                q.add(new Pair(top.node.right, top.lvl + 1));
        }

        int[][] res = new int[map.size()][];
        int idx1 = 0;

        for (int i = minL; i <= maxL; i++) {

            List<Integer> list = map.get(i);
            int[] arr = new int[list.size()];
            int idx2 = 0;

            for (int val : list)
                arr[idx2++] = val;

            res[idx1++] = arr;
        }

        return res;
    }
}
