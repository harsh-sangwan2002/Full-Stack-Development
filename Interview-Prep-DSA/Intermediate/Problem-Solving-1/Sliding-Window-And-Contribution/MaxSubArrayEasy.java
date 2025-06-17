public class MaxSubArrayEasy {

    public int maxSubarray(int A, int B, int[] C) {

        int n = C.length, maxSum = 0;

        for (int i = 0; i < n; i++) {

            int currSum = 0;
            for (int j = i; j < n; j++) {

                currSum += C[j];

                if (currSum > B)
                    break;

                maxSum = Math.max(maxSum, currSum);
            }
        }

        return maxSum;
    }
}
