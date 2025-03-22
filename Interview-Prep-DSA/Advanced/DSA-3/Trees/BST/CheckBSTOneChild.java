public class CheckBSTOneChild {

    public String solve(int[] A) {

        int L = Integer.MIN_VALUE, R = Integer.MAX_VALUE;
        int root = A[0];

        for (int i = 1; i < A.length; i++) {

            if (A[i] > root)
                L = root;

            else
                R = root;

            if (A[i] < L || A[i] > R)
                return "NO";

            root = A[i];
        }

        return "YES";
    }
}
