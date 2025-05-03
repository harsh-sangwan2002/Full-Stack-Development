public class LeadersInArray {

    public int[] solve(int[] A) {

        int n = A.length;
        int[] max = new int[n];
        int count = 0;

        for (int i = n - 1; i >= 0; i--) {

            if (i == n - 1) {
                max[i] = A[i];
                count++;
            }

            else {

                if (A[i] > max[i + 1])
                    count++;

                max[i] = Math.max(A[i], max[i + 1]);
            }
        }

        int[] res = new int[count];
        int idx = 0;

        for (int i = 0; i < n; i++) {

            if (i == 0)
                res[idx++] = max[i];

            else if (max[i] != max[i - 1])
                res[idx++] = max[i];
        }

        return res;
    }
}
