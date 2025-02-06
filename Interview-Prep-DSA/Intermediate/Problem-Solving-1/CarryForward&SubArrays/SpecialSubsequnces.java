public class SpecialSubsequnces {

    public int solve(String A) {

        long mod = (long) (1e9 + 7);
        long countOfA = 0, countOfAG = 0;

        for (char ch : A.toCharArray()) {

            if (ch == 'A')
                countOfA++;

            else if (ch == 'G')
                countOfAG = (countOfA + countOfAG) % mod;
        }

        return (int) countOfAG;
    }
}
