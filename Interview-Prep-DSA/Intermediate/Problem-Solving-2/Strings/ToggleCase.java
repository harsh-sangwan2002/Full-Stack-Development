public class ToggleCase {

    public String solve(String A) {

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < A.length(); i++) {

            char ch = A.charAt(i);

            if (ch >= 'A' && ch <= 'Z')
                sb.append((char) (ch + 32));

            else
                sb.append((char) (ch - 32));
        }

        return sb.toString();
    }
}