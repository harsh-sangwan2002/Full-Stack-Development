public class StringOperations {

    public String solve(String A) {

        StringBuilder str = new StringBuilder(A);
        str.append(A);
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < str.length(); i++) {

            char ch = str.charAt(i);

            if (ch >= 'A' && ch <= 'Z')
                continue;

            else if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
                sb.append('#');

            else
                sb.append(ch);
        }

        return sb.toString();
    }
}
