package TwoSumBST;

import java.util.Stack;

public class sol2 {

    public int t2Sum(TreeNode A, int B) {

        Stack<TreeNode> stack1 = new Stack<TreeNode>();
        Stack<TreeNode> stack2 = new Stack<TreeNode>();
        TreeNode current1 = A;
        TreeNode current2 = A;

        while (((stack1.size() > 0) || current1 != null) || (stack2.size() > 0) || current2 != null) {
            if (current1 != null || current2 != null) {
                if (current1 != null) {
                    stack1.push(current1);
                    current1 = current1.left;
                }
                if (current2 != null) {
                    stack2.push(current2);
                    current2 = current2.right;
                }
            } else {
                if (stack1.size() == 0 || stack2.size() == 0)
                    break;
                TreeNode node1 = stack1.peek();
                TreeNode node2 = stack2.peek();

                int sum = node1.val + node2.val;
                if (node1.val == node2.val) {
                    return 0;
                } else if (sum == B)
                    return 1;
                else if (sum < B) {
                    stack1.pop();
                    current1 = node1.right;
                } else {
                    stack2.pop();
                    current2 = node2.left;
                }
            }
        }
        return 0;
    }
}
