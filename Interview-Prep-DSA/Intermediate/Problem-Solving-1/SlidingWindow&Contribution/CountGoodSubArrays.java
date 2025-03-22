public class CountGoodSubArrays {

    public int solve(int[] A, int B) {

        int n = A.length, goodSubArraysCount = 0;

        for (int i = 0; i < n; i++) {

            int sum = 0, len = 0;
            for (int j = i; j < n; j++) {

                sum += A[j];
                len++;

                if (len % 2 == 0 && sum < B)
                    goodSubArraysCount++;

                else if (len % 2 == 1 && sum > B)
                    goodSubArraysCount++;
            }
        }

        return goodSubArraysCount;
    }
}
