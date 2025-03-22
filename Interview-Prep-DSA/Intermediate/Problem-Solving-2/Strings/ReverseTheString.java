import java.util.Stack;

public class ReverseTheString {

    public String solve(String A) {

        int idx = 0;
        Stack<StringBuilder> st = new Stack<>();

        while (idx < A.length()) {

            StringBuilder temp = new StringBuilder();

            while (idx < A.length() && A.charAt(idx) != ' ')
                temp.append(A.charAt(idx++));

            st.push(temp);
            idx++;
        }

        StringBuilder sb = new StringBuilder();
        while (st.size() != 0) {

            StringBuilder temp = st.pop();

            if (st.size() == 0)
                sb.append(temp);

            else
                sb.append(temp + " ");
        }

        return sb.toString().trim();
    }
}
