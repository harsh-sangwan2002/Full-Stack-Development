import java.util.HashSet;

public class LongestSubstring {

    public int lengthOfLongestSubstring(String A) {

        if (A == null || A.isEmpty()) {
            return 0;
        }

        HashSet<Character> seen = new HashSet<>();
        int maxLength = 0;
        int left = 0;

        for (int right = 0; right < A.length(); right++) {
            char currentChar = A.charAt(right);

            while (seen.contains(currentChar)) {
                seen.remove(A.charAt(left));
                left++;
            }
            seen.add(currentChar);

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
