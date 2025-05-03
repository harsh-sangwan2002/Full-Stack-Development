public class CreateTreePreOrderInOrder {

    private int findIdx(int tar, int is, int ie, int[] in) {

        for (int i = is; i <= ie; i++) {

            if (in[i] == tar)
                return i;
        }

        return -1;
    }

    private TreeNode createTree(int[] pre, int ps, int pe, int[] in, int is, int ie) {

        if (is > ie || ps > pe)
            return null;

        TreeNode root = new TreeNode(pre[ps]);
        int rootIdx = findIdx(root.val, is, ie, in);
        int ele = rootIdx - is;

        root.left = createTree(pre, ps + 1, pe, in, is, rootIdx - 1);
        root.right = createTree(pre, ps + ele + 1, pe, in, rootIdx + 1, ie);

        return root;
    }

    public TreeNode buildTree(int[] A, int[] B) {

        return createTree(A, 0, A.length - 1, B, 0, B.length - 1);
    }
}
