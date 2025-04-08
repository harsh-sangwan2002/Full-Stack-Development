public class GenerateAllSubArrays {

    public int[][] solve(int[] A) {

        int n = A.length, size = n * (n + 1) / 2;
        int[][] res = new int[size][];
        int idx = 0;

        for (int i = 0; i < n; i++) {

            for (int j = i; j < n; j++) {

                int[] arr = new int[j - i + 1];

                for (int k = i; k <= j; k++)
                    arr[k - i] = A[k];

                res[idx++] = arr;
            }
        }

        return res;
    }
}
