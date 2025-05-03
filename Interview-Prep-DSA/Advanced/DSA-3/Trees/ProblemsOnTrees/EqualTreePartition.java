public class EqualTreePartition {

    private long findSum(TreeNode root) {

        if (root == null)
            return 0L;

        long lsum = findSum(root.left);
        long rsum = findSum(root.right);

        return 0L + lsum + rsum + root.val;
    }

    boolean flag;

    private long check(TreeNode root, long S) {

        if (root == null)
            return 0;

        long left = check(root.left, S);
        long right = check(root.right, S);

        if (left == S / 2 || right == S / 2)
            flag = true;

        return 0L + left + right + root.val;
    }

    public int solve(TreeNode root) {

        flag = false;

        long S = findSum(root);

        if (S % 2 != 0)
            return 0;

        check(root, S);

        return flag ? 1 : 0;
    }
}
