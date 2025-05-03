import java.util.Stack;

public class DoubleCharacterTrouble {

    public String solve(String A) {

        Stack<Character> st = new Stack<>();

        for (int i = A.length() - 1; i >= 0; i--) {

            char ch = A.charAt(i);

            if (st.size() == 0 || st.peek() != ch)
                st.push(ch);

            else
                st.pop();
        }

        StringBuilder sb = new StringBuilder();

        while (st.size() != 0)
            sb.append(st.pop());

        return sb.toString();
    }
}
