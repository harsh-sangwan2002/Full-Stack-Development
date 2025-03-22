public class MaximumSubArray {

    public int maxSubarray(int A, int B, int[] C) {

        int max = 0;

        for (int i = 0; i < C.length; i++) {

            int sum = 0;

            for (int j = i; j < C.length; j++) {

                sum += C[j];

                if (sum <= B)
                    max = Math.max(max, sum);

                else
                    break;
            }
        }

        return max;
    }
}