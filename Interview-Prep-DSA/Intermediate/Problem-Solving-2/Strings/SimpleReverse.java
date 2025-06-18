public class SimpleReverse {

    public String solve(String A) {

        StringBuilder sb = new StringBuilder();

        for (int i = A.length() - 1; i >= 0; i--) {

            char ch = A.charAt(i);
            sb.append(ch);
        }

        return sb.toString();
    }
}
