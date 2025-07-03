public class SpecialSubsequences {

    public int solve(String A) {

        long mod = (long) (1e9 + 7);
        long countA = 0, countAG = 0;

        for (char ch : A.toCharArray()) {

            if (ch == 'A')
                countA = (countA + 1) % mod;

            else if (ch == 'G')
                countAG = (countA + countAG) % mod;
        }

        return (int) countAG;
    }
}
