public class LongestPalindromicSubstring {

    public String longestPalindrome(String A) {

        int maxLen = 1, st = 0;

        for (int c = 0; c < A.length(); c++) {

            int i = c - 1, j = c + 1;

            while (i >= 0 && j < A.length()) {

                if (A.charAt(i) != A.charAt(j))
                    break;

                i--;
                j++;
            }

            int currLen = j - i - 1;
            if (currLen > maxLen) {
                maxLen = currLen;
                st = i + 1;
            }
        }

        for (int c = 0; c < A.length(); c++) {

            int i = c, j = c + 1;

            while (i >= 0 && j < A.length()) {

                if (A.charAt(i) != A.charAt(j))
                    break;

                i--;
                j++;
            }

            int currLen = j - i - 1;
            if (currLen > maxLen) {
                maxLen = currLen;
                st = i + 1;
            }
        }

        StringBuilder sb = new StringBuilder();

        for (int i = st; i < st + maxLen; i++)
            sb.append(A.charAt(i));

        return sb.toString();
    }
}
