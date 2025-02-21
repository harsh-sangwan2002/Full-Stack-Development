public class AmazingSubArrays {

    public int solve(String A) {

        long ans = 0, mod = (long) (1e4 + 3);

        for (int i = 0; i < A.length(); i++) {

            char ch = A.charAt(i);

            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
                ans = (ans + A.length() - i) % mod;

            else if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
                ans = (ans + A.length() - i) % mod;
        }

        return (int) ans;
    }
}
