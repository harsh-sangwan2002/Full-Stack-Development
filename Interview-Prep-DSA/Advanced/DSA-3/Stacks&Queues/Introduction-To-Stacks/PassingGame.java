import java.util.Stack;

public class PassingGame {

    public int solve(int A, int B, int[] C) {

        Stack<Integer> st = new Stack<>();
        st.push(B);

        for (int val : C) {

            if (val == 0)
                st.pop();

            else
                st.push(val);
        }

        return st.peek();
    }
}
