public class SubArray {

    public int[] solve(int[] A, int B, int C) {

        int len = C - B + 1;
        int[] res = new int[len];

        for (int i = B; i <= C; i++)
            res[i - B] = A[i];

        return res;
    }
}
