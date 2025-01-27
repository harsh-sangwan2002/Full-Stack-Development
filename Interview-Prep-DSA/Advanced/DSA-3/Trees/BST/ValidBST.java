public class ValidBST {

    private int helper(TreeNode node, int min, int max) {

        if (node == null)
            return 1;

        else if (node.val < min || node.val > max)
            return 0;

        else {

            int left = helper(node.left, min, node.val - 1);
            if (left == 0)
                return 0;

            int right = helper(node.right, node.val + 1, max);
            if (right == 0)
                return 0;

            return 1;
        }
    }

    public int isValidBST(TreeNode A) {

        return helper(A, 0, Integer.MAX_VALUE);
    }
}
