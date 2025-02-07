public class StringOperations {

    public String solve(String A) {

        StringBuilder sb = new StringBuilder();

        StringBuilder temp = new StringBuilder(A);
        temp.append(A);

        for (int i = 0; i < temp.length(); i++) {

            char ch = temp.charAt(i);

            if (ch >= 'a' && ch <= 'z') {

                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
                    sb.append('#');

                else
                    sb.append(ch);
            }
        }

        return sb.toString();
    }
}
