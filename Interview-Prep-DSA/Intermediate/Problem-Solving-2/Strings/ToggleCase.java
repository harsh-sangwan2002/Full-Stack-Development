public class ToggleCase {

    public String solve(String A) {

        StringBuilder sb = new StringBuilder();

        for (char ch : A.toCharArray()) {

            if (ch >= 'a' && ch <= 'z')
                sb.append((char) (ch - 32));

            else
                sb.append((char) (ch + 32));
        }

        return sb.toString();
    }
}
