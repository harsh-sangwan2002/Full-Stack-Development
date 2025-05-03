import java.util.Stack;

public class BalancedParenthesis {

    private boolean isValid(Stack<Character> st, char ch) {

        if (st.size() == 0 || st.peek() != ch)
            return false;

        st.pop();
        return true;
    }

    public int solve(String A) {

        Stack<Character> st = new Stack<>();

        for (int i = 0; i < A.length(); i++) {

            char ch = A.charAt(i);

            if (ch == '(' || ch == '{' || ch == '[')
                st.push(ch);

            else if (ch == ')') {

                boolean flag = isValid(st, '(');

                if (!flag)
                    return 0;
            }

            else if (ch == ']') {

                boolean flag = isValid(st, '[');

                if (!flag)
                    return 0;
            }

            else if (ch == '}') {

                boolean flag = isValid(st, '{');

                if (!flag)
                    return 0;
            }
        }

        return st.size() == 0 ? 1 : 0;
    }
}
