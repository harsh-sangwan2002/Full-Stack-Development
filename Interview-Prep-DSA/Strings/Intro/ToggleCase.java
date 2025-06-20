public class ToggleCase {

    private static String toggle(String str) {

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < str.length(); i++) {

            char ch = str.charAt(i);

            if (ch >= 'a' && ch <= 'z')
                sb.append((char) (ch - 32));

            else
                sb.append((char) (ch + 32));

        }

        return sb.toString();
    }

    public static void main(String[] args) {

        String str = "HelloWorld";
        String res = toggle(str);
        System.out.println(res);
    }
}
