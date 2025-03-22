import java.util.Stack;

public class QueuesUsingStacks {
    /** Initialize your data structure here. */

    private static Stack<Integer> st;
    private static Stack<Integer> helper;

    QueuesUsingStacks() {

        st = new Stack<>();
        helper = new Stack<>();
    }

    /** Push element X to the back of queue. */
    static void push(int X) {

        while (st.size() != 0)
            helper.push(st.pop());

        st.push(X);

        while (helper.size() != 0)
            st.push(helper.pop());
    }

    /** Removes the element from in front of queue and returns that element. */
    static int pop() {

        return st.pop();
    }

    /** Get the front element of the queue. */
    static int peek() {

        return st.peek();
    }

    /** Returns whether the queue is empty. */
    static boolean empty() {

        return st.isEmpty();
    }
}

/**
 * Your UserQueue object will be instantiated and called as such:
 * UserQueue obj = new UserQueue();
 * obj.push(X);
 * int param2 = obj.pop();
 * int param3 = obj.peek();
 * boolean param4 = obj.empty();
 */