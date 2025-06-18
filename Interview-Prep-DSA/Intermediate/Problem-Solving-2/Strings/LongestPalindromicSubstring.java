public class LongestPalindromicSubstring {

    public String longestPalindrome(String A) {

        int st = 0, maxLen = 1, n = A.length();

        // Odd length palindrome
        for (int c = 0; c < n; c++) {

            int i = c - 1, j = c + 1;

            while (i >= 0 && j < n && A.charAt(i) == A.charAt(j)) {
                i--;
                j++;
            }

            int currLen = j - i - 1;
            if (currLen > maxLen) {
                st = i + 1;
                maxLen = currLen;
            }
        }

        // Event length palindrome
        for (int c = 0; c < n; c++) {

            int i = c, j = c + 1;

            while (i >= 0 && j < n && A.charAt(i) == A.charAt(j)) {
                i--;
                j++;
            }

            int currLen = j - i - 1;
            if (currLen > maxLen) {
                st = i + 1;
                maxLen = currLen;
            }
        }

        StringBuilder sb = new StringBuilder();

        for (int i = st; i < st + maxLen; i++)
            sb.append(A.charAt(i));

        return sb.toString();
    }
}
