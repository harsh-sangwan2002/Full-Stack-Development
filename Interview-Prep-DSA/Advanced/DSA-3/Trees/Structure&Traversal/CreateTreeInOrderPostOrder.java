public class CreateTreeInOrderPostOrder {

    private int findIdx(int tar, int is, int ie, int[] arr) {

        for (int i = is; i <= ie; i++) {

            if (arr[i] == tar)
                return i;
        }

        return -1;
    }

    private TreeNode createTree(int is, int ie, int[] in, int ps, int pe, int[] post) {

        if (is > ie || ps > pe)
            return null;

        TreeNode root = new TreeNode(post[pe]);
        int rootIdx = findIdx(root.val, is, ie, in);
        int ele = rootIdx - is;

        root.left = createTree(is, rootIdx - 1, in, ps, ps + ele - 1, post);
        root.right = createTree(rootIdx + 1, ie, in, ps + ele, pe - 1, post);

        return root;
    }

    public TreeNode buildTree(int[] A, int[] B) {

        return createTree(0, A.length - 1, A, 0, B.length - 1, B);
    }
}
