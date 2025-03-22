public class PathSum {

    public int hasPathSum(TreeNode A, int B) {

        if (A == null)
            return 0;

        if (A.left == null && A.right == null)
            return A.val == B ? 1 : 0;

        int left = hasPathSum(A.left, B - A.val);
        if (left == 1)
            return 1;

        int right = hasPathSum(A.right, B - A.val);
        if (right == 1)
            return 1;

        return 0;
    }
}
