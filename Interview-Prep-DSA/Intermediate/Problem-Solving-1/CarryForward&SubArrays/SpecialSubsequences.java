public class SpecialSubsequences {

    public int solve(String A) {

        long ans = 0L, mod = (long) (1e9 + 7);
        long countA = 0L;

        for (char ch : A.toCharArray()) {

            if (ch == 'A')
                countA++;

            else if (ch == 'G')
                ans = (ans + countA) % mod;
        }

        return (int) ans;
    }
}
