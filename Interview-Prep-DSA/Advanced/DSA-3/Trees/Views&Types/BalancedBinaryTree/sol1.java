package BalancedBinaryTree;

public class sol1 {

    private int balanced;

    private int height(TreeNode node) {

        if (node == null)
            return 0;

        int lh = height(node.left);
        int rh = height(node.right);

        if (Math.abs(lh - rh) > 1)
            balanced = 0;

        return Math.max(lh, rh) + 1;
    }

    public int isBalanced(TreeNode A) {

        balanced = 1;
        height(A);
        return balanced;
    }
}
