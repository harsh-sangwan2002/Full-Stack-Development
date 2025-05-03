import java.util.Stack;

public class EvaluateExpression {

    private int calc(int v1, int v2, String str) {

        switch (str) {

            case "+":
                return v1 + v2;

            case "-":
                return v1 - v2;

            case "*":
                return v1 * v2;

            case "/":
                return v1 / v2;
        }

        return -1;
    }

    public int evalRPN(String[] A) {

        Stack<Integer> st = new Stack<>();

        for (String str : A) {

            if (str.equals("+") || str.equals("*") || str.equals("/") || str.equals("-")) {
                int s2 = st.pop();
                int s1 = st.pop();

                st.push(calc(s1, s2, str));
            }

            else
                st.push(Integer.parseInt(str));
        }

        return st.pop();
    }
}
