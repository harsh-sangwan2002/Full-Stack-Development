import java.util.Stack;

public class MinStack {

    private Stack<Integer> st;
    private Stack<Integer> min;

    public MinStack() {
        st = new Stack<>();
        min = new Stack<>();
    }

    public void push(int x) {

        st.push(x);

        if (min.size() == 0 || x < min.peek())
            min.push(x);
    }

    public void pop() {

        if (st.size() == 0 || min.size() == 0)
            return;

        int val = st.pop();
        if (val == min.peek())
            min.pop();
    }

    public int top() {

        if (st.size() == 0)
            return -1;

        return st.peek();
    }

    public int getMin() {

        if (min.size() == 0)
            return -1;

        return min.peek();
    }
}
