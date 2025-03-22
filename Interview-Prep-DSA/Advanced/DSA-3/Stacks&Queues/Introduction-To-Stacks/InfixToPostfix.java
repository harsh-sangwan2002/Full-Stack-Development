import java.util.Stack;

public class InfixToPostfix {

    private int precedence(char ch) {

        if (ch == '+' || ch == '-')
            return 0;

        else if (ch == '/' || ch == '*')
            return 1;

        else
            return 2;
    }

    public String solve(String A) {

        StringBuilder sb = new StringBuilder();
        Stack<Character> st = new Stack<>();

        for (int i = 0; i < A.length(); i++) {

            char ch = A.charAt(i);

            if (ch == '(')
                st.push(ch);

            else if (ch == ')') {

                while (st.size() != 0 && st.peek() != '(')
                    sb.append(st.pop());

                st.pop();
            }

            else if (ch == '+' || ch == '-' || ch == '/' || ch == '*' || ch == '^') {

                while (st.size() != 0 && st.peek() != '(' && precedence(st.peek()) >= precedence(ch))
                    sb.append(st.pop());

                st.push(ch);
            }

            else
                st.push(ch);
        }

        while (st.size() != 0)
            sb.append(st.pop());

        return sb.toString();
    }
}
