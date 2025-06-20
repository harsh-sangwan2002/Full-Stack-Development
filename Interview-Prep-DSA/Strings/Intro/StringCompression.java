public class StringCompression {

    private static String compressString1(String str) {

        int n = str.length();
        StringBuilder sb = new StringBuilder("");
        sb.append(str.charAt(0));

        for (int i = 1; i < n; i++) {

            char prev = str.charAt(i - 1);
            char curr = str.charAt(i);

            if (prev != curr) {
                sb.append(curr);
            }
        }

        return sb.toString();
    }

    private static String compressString2(String str) {

        StringBuilder sb = new StringBuilder();
        int idx = 0, count = 0;

        while (idx < str.length()) {

            char curr = str.charAt(idx);
            count = 0;

            while (idx < str.length() && str.charAt(idx) == curr) {
                count++;
                idx++;
            }

            if (count != 1) {
                sb.append(curr);
                sb.append(count);
            } else {
                sb.append(curr);
            }
        }

        return sb.toString();
    }

    public static void main(String[] args) {

        String str = "aaabbcccddaeef";
        String compressedString = compressString1(str);
        String compressedString2 = compressString2(str);

        System.out.println(compressedString);
        System.out.println(compressedString2);
    }
}
