public class ToggleCase {

    public String solve(String A) {

        StringBuilder sb = new StringBuilder("");

        for (char ch : A.toCharArray()) {

            if (ch >= 'A' && ch <= 'Z') {
                char ch2 = (char) (ch + 32);
                sb.append(ch2);
            }

            else {
                char ch2 = (char) (ch - 32);
                sb.append(ch2);
            }
        }

        return sb.toString();
    }
}
