public class SpecialSubsequenceAG {

    public int solve(String A) {

        long mod = (long) (1e9 + 7), a = 0L, ag = 0L;

        for (char ch : A.toCharArray()) {

            if (ch == 'A')
                a = (a + 1) % mod;

            else if (ch == 'G')
                ag = (ag + a) % mod;
        }

        return (int) ag;
    }
}
