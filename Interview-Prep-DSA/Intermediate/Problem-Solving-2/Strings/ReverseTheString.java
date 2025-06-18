import java.util.Stack;

public class ReverseTheString {

    public String solve(String A) {

        int idx = 0;
        StringBuilder sb = new StringBuilder();
        Stack<StringBuilder> st = new Stack<>();

        while (idx < A.length()) {

            StringBuilder temp = new StringBuilder();

            while (idx < A.length() && A.charAt(idx) != ' ')
                temp.append(A.charAt(idx++));

            st.push(temp);

            if (idx == A.length())
                break;

            else
                idx++;
        }

        while (st.size() != 0) {

            StringBuilder str = st.pop();
            sb.append(str);

            sb.append(" ");
        }

        return sb.toString().trim();
    }
}
