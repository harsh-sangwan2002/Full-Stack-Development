package TwoSumBST;

import java.util.ArrayList;
import java.util.List;


public class sol1 {

    private List<Integer> list;

    private void InOrder(TreeNode node) {

        if (node == null)
            return;

        InOrder(node.left);
        list.add(node.val);
        InOrder(node.right);
    }

    public int t2Sum(TreeNode A, int B) {

        list = new ArrayList<>();
        InOrder(A);

        int lo = 0, hi = list.size() - 1;

        while (lo < hi) {

            int left = list.get(lo);
            int right = list.get(hi);

            if (left + right == B)
                return 1;

            else if (left + right > B)
                hi--;

            else
                lo++;
        }

        return 0;
    }
}
