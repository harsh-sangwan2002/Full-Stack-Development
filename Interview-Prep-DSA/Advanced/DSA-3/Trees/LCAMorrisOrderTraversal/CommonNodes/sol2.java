package CommonNodes;

import java.util.Stack;

public class sol2 {

    public int solve(TreeNode A, TreeNode B) {
        int temp = (int) common(A, B);
        return temp;
    }

    public static long common(TreeNode root1, TreeNode root2) {
        int mod = 1000000007;
        long sum = 0;
        Stack<TreeNode> s1 = new Stack<TreeNode>();
        Stack<TreeNode> s2 = new Stack<TreeNode>();

        while (true) {
            // push the Nodes of first tree in stack s1
            if (root1 != null) {
                s1.push(root1);
                root1 = root1.left;
            }

            // push the Nodes of second tree in stack s2
            else if (root2 != null) {
                s2.push(root2);
                root2 = root2.left;
            }

            // Both root1 and root2 are NULL here
            else if (!s1.isEmpty() && !s2.isEmpty()) {
                root1 = s1.peek();
                root2 = s2.peek();

                // If current keys in two trees are same
                if (root1.val == root2.val) {
                    long temp = (long) root1.val;
                    sum = ((sum % mod) + (temp % mod)) % mod;
                    s1.pop();
                    s2.pop();

                    // move to the inorder successor
                    root1 = root1.right;
                    root2 = root2.right;
                } else if (root1.val < root2.val) {
                    // If Node of first tree is smaller, than that of
                    // second tree, then its obvious that the inorder
                    // successors of current Node can have same value
                    // as that of the second tree Node. Thus, we pop
                    // from s2
                    s1.pop();
                    root1 = root1.right;

                    // root2 is set to NULL, because we need
                    // new Nodes of tree 1
                    root2 = null;
                } else if (root1.val > root2.val) {
                    s2.pop();
                    root2 = root2.right;
                    root1 = null;
                }
            }

            // Both roots and both stacks are empty
            else
                break;
        }
        return sum;
    }

}