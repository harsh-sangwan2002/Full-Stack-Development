public class PairsWithGivenSum {

    public int solve(int[] A, int B) {

        long mod = (long) (1e9 + 7), ans = 0L;
        int i = 0, j = A.length - 1;

        while (i < j) {

            int sum = A[i] + A[j];

            if (sum == B) {

                if (A[i] == A[j]) {
                    int len = j - i + 1;
                    long count = (len * (len - 1)) / 2 % mod;
                    ans = (ans + count) % mod;
                    return (int) ans;
                }

                int count1 = 0, count2 = 0, i2 = i;
                while (A[i2] == A[i]) {
                    count1++;
                    i2++;
                }

                i = i2;
                i2 = j;

                while (A[i2] == A[j]) {
                    count2++;
                    i2--;
                }

                j = i2;

                ans = (ans + count1 * count2) % mod;

            }

            else if (sum < B)
                i++;

            else
                j--;
        }

        return (int) ans;
    }
}
