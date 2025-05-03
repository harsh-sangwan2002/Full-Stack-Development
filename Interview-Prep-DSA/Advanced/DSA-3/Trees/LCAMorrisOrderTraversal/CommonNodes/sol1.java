package CommonNodes;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


public class sol1 {

    private void InOrder(TreeNode node, List<Integer> list) {

        if (node == null)
            return;

        InOrder(node.left, list);
        list.add(node.val);
        InOrder(node.right, list);
    }

    public int solve(TreeNode A, TreeNode B) {

        List<Integer> l1 = new ArrayList<>();
        List<Integer> l2 = new ArrayList<>();

        InOrder(A, l1);
        InOrder(B, l2);

        Set<Integer> set = new HashSet<>();
        long sum = 0, mod = (long) (1e9 + 7);
        for (int val : l1)
            set.add(val);

        for (int val : l2) {
            if (set.contains(val))
                sum = (sum + val) % mod;
        }

        return (int) sum;
    }
}
