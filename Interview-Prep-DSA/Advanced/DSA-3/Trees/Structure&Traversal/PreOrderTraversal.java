import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class PreOrderTraversal {

    class Pair {
        TreeNode node;
        int state;

        Pair(TreeNode node, int state) {
            this.node = node;
            this.state = state;
        }
    }

    public int[] preorderTraversal(TreeNode A) {

        Stack<Pair> st = new Stack<>();
        st.push(new Pair(A, 0));
        List<Integer> list = new ArrayList<>();

        while (st.size() != 0) {

            Pair top = st.peek();
            if (top.state == 0) {
                list.add(top.node.val);
                top.state++;

                if (top.node.left != null)
                    st.push(new Pair(top.node.left, 0));
            }

            else if (top.state == 1) {

                top.state++;

                if (top.node.right != null)
                    st.push(new Pair(top.node.right, 0));
            }

            else {

                st.pop();
            }
        }

        int[] res = new int[list.size()];
        int idx = 0;

        for (int val : list)
            res[idx++] = val;

        return res;
    }
}
