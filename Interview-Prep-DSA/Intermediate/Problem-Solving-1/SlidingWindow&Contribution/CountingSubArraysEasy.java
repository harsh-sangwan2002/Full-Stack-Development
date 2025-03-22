public class CountingSubArraysEasy {

    public int solve(int[] A, int B) {

        int n = A.length, countSubArrays = 0;

        for (int i = 0; i < n; i++) {

            int sum = 0;
            for (int j = i; j < n; j++) {

                sum += A[j];

                if (sum < B)
                    countSubArrays++;

                else if (sum >= B)
                    break;
            }
        }

        return countSubArrays;
    }
}
