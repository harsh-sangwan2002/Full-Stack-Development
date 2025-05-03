public class SortedArrayBST {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY

    private TreeNode helper(int[] A, int lo, int hi) {

        if (lo > hi)
            return null;

        int mid = lo + (hi - lo) / 2;

        TreeNode root = new TreeNode(A[mid]);
        root.left = helper(A, lo, mid - 1);
        root.right = helper(A, mid + 1, hi);

        return root;
    }

    public TreeNode sortedArrayToBST(final int[] A) {

        return helper(A, 0, A.length - 1);
    }
}
