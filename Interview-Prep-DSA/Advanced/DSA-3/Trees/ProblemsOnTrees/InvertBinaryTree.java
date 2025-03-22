public class InvertBinaryTree {

    public TreeNode invertTree(TreeNode A) {

        if (A == null)
            return null;

        TreeNode left = invertTree(A.left);
        TreeNode right = invertTree(A.right);

        A.left = right;
        A.right = left;
        return A;
    }
}
