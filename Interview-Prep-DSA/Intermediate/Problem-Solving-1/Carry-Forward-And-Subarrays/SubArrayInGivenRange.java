public class SubArrayInGivenRange {

    public int[] solve(int[] A, int B, int C) {

        int size = C - B + 1;
        int[] res = new int[size];

        for (int i = B; i <= C; i++)
            res[i - B] = A[i];

        return res;
    }
}
