public class SortedRank {

    private static long mod = (long) (1e6 + 3);

    private long fact(int n) {

        if (n == 0 || n == 1)
            return 1L;

        return n * fact(n - 1) * 1L % mod;
    }

    public int findRank(String A) {

        long ans = 0;

        for (int i = 0; i < A.length(); i++) {
            char ch1 = A.charAt(i);
            int count = 0;
            for (int j = i + 1; j < A.length(); j++) {

                char ch2 = A.charAt(j);
                if (ch2 < ch1)
                    count++;
            }

            ans = (ans + count * 1L * fact(A.length() - i - 1)) % mod;
        }

        return (int) ((ans + 1) % mod);
    }
}
