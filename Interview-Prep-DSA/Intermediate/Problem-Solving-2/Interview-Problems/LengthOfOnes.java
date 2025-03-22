public class LengthOfOnes {

    public int solve(String A) {

        int noOfOnes = 0, max = 0;

        for (char ch : A.toCharArray()) {

            if (ch == '1')
                noOfOnes++;
        }

        if (noOfOnes == A.length())
            return noOfOnes;

        for (int i = 0; i < A.length(); i++) {

            char ch = A.charAt(i);

            if (ch == '0') {

                int left = 0, right = 0;
                int j = i - 1;

                while (j >= 0 && A.charAt(j) == '1') {
                    left++;
                    j--;
                }

                j = i + 1;

                while (j < A.length() && A.charAt(j) == '1') {
                    right++;
                    j++;
                }

                if (noOfOnes == left + right)
                    max = Math.max(max, noOfOnes);

                else
                    max = Math.max(max, left + right + 1);
            }
        }

        return max;
    }
}