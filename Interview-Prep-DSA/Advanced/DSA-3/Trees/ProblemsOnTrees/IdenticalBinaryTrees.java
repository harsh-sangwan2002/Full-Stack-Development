public class IdenticalBinaryTrees {

    public int isSameTree(TreeNode A, TreeNode B) {

        if (A == null && B == null)
            return 1;

        else if (A == null || B == null || A.val != B.val)
            return 0;

        int left = isSameTree(A.left, B.left);
        if (left == 0)
            return 0;

        int right = isSameTree(A.right, B.right);
        if (right == 0)
            return 0;

        return 1;
    }
}
