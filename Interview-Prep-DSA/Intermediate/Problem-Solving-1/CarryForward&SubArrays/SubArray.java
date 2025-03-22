public class SubArray {

    public int[] solve(int[] A, int B, int C) {

        int n = C - B + 1;
        int[] res = new int[n];

        for (int i = B; i <= C; i++)
            res[i - B] = A[i];

        return res;
    }
}
