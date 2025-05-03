public class DeleteNode {

    private int findMax(TreeNode node) {

        if (node == null)
            return 0;

        TreeNode curr = node;

        while (curr.right != null)
            curr = curr.right;

        return curr.val;
    }

    public TreeNode solve(TreeNode A, int B) {

        if (A == null)
            return null;

        if (A.val < B)
            A.right = solve(A.right, B);

        else if (A.val > B)
            A.left = solve(A.left, B);

        else {

            if (A.left == null && A.right == null)
                return null;

            else if (A.left == null)
                return A.right;

            else if (A.right == null)
                return A.left;

            else {
                int v = findMax(A.left);
                A.val = v;
                A.left = solve(A.left, v);
            }
        }

        return A;
    }
}
