import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Queue;

public class TopView {

    class Pair {

        TreeNode node;
        int lvl;

        Pair(TreeNode node, int lvl) {
            this.node = node;
            this.lvl = lvl;
        }
    }

    public int[] solve(TreeNode A) {

        HashMap<Integer, List<Integer>> map = new HashMap<>();
        Queue<Pair> q = new ArrayDeque<>();
        q.add(new Pair(A, 0));

        while (q.size() != 0) {

            Pair top = q.remove();

            if (map.containsKey(top.lvl)) {
                List<Integer> list = map.get(top.lvl);
                list.add(top.node.val);
            }

            else {
                List<Integer> list = new ArrayList<>();
                list.add(top.node.val);
                map.put(top.lvl, list);
            }

            if (top.node.left != null)
                q.add(new Pair(top.node.left, top.lvl - 1));

            if (top.node.right != null)
                q.add(new Pair(top.node.right, top.lvl + 1));
        }

        int[] res = new int[map.size()];
        int idx = 0;

        for (int key : map.keySet()) {

            List<Integer> list = map.get(key);
            res[idx++] = list.get(0);
        }

        return res;
    }
}
