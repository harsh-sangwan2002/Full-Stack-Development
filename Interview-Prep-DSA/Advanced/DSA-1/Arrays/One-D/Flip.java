public class Flip {

    public int[] flip(String A) {

        int n = A.length(), currSum = 0, maxSum = 0, l = 0, r = 0;
        int[] res = new int[2];

        for (int i = 0; i < n; i++) {

            char ch = A.charAt(i);

            if (ch == '0')
                currSum += 1;

            else
                currSum -= 1;

            if (currSum > maxSum) {
                maxSum = currSum;
                res[0] = l + 1;
                res[1] = r + 1;
            }

            if (currSum < 0) {
                currSum = 0;
                l = i + 1;
                r = i + 1;
            }

            else
                r++;
        }

        if (res[0] == 0)
            return new int[] {};

        return res;
    }
}
