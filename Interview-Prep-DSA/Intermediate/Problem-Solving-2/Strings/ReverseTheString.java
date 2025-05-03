import java.util.Stack;

public class ReverseTheString {

    public String solve(String A) {

        StringBuilder sb = new StringBuilder();
        Stack<StringBuilder> st = new Stack<>();
        int idx = 0;

        while (idx < A.length()) {

            StringBuilder temp = new StringBuilder();

            while (idx < A.length() && A.charAt(idx) != ' ')
                temp.append(A.charAt(idx++));

            st.push(temp);

            if (idx >= A.length())
                break;

            idx++;
        }

        while (st.size() != 0) {

            StringBuilder temp = st.pop();

            if (st.size() != 0)
                temp.append(" ");

            sb.append(temp);
        }

        return sb.toString().trim();
    }
}
