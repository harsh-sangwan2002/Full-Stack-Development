public class SearchNode {

    public int solve(TreeNode A, int B) {

        if (A == null)
            return 0;

        if (A.val == B)
            return 1;

        if (A.val > B)
            return solve(A.left, B);

        else
            return solve(A.right, B);
    }
}
