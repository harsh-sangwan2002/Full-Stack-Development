public class LongestPalindrome {

    private static String solve(String str) {

        int n = str.length(), st = 0, maxLen = 1;

        // Odd length palindromes
        for (int c = 0; c < n; c++) {

            int l = c - 1, r = c + 1;

            while (l >= 0 && r < n && str.charAt(l) == str.charAt(r)) {
                l--;
                r++;
            }

            int len = r - l - 1;
            if (len > maxLen) {
                st = l + 1;
                maxLen = len;
            }
        }

        // Even length palindromes
        for (int c = 0; c < n; c++) {

            int l = c, r = c + 1;

            while (l >= 0 && r < n && str.charAt(l) == str.charAt(r)) {
                l--;
                r++;
            }

            int len = r - l - 1;
            if (len > maxLen) {
                st = l + 1;
                maxLen = len;
            }
        }

        StringBuilder sb = new StringBuilder();

        for (int i = st; i < st + maxLen; i++) {
            sb.append(str.charAt(i));
        }

        return sb.toString();
    }

    public static void main(String[] args) {

        // String str = "nitin";
        String str = "aaabbaa";

        String res = solve(str);

        System.out.println(res);
    }
}
