// TC -> O(N)
// SC -> O(1) 
public class SpecialSubsequences {

    public int solve(String A) {

        long ans = 0L, mod = (long) (1e9 + 7);
        long G = 0L;

        for (char ch : A.toCharArray()) {

            if (ch == 'A')
                G = (G + 1) % mod;

            else if (ch == 'G')
                ans = (ans + G) % mod;
        }

        return (int) ans;
    }
}
