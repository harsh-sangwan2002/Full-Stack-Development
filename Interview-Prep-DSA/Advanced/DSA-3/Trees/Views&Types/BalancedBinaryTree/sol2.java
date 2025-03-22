package BalancedBinaryTree;

public class sol2 {

    private class Pair {
        int height;
        boolean isBalanced;

        Pair(int height, boolean isBalanced) {
            this.height = height;
            this.isBalanced = isBalanced;
        }
    }

    private Pair helper(TreeNode node) {

        if (node == null)
            return new Pair(0, true);

        Pair lp = helper(node.left);
        Pair rp = helper(node.right);

        boolean balanced = lp.isBalanced && rp.isBalanced && (Math.abs(lp.height - rp.height) <= 1);
        int height = Math.max(lp.height, rp.height) + 1;

        Pair mp = new Pair(height, balanced);
        return mp;
    }

    public int isBalanced(TreeNode A) {

        return helper(A).isBalanced ? 1 : 0;
    }
}
