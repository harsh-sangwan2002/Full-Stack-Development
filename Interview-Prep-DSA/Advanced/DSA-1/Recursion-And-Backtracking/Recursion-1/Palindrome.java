public class Palindrome {

    private int helper(String str, int lo, int hi) {

        if (lo >= hi)
            return 1;

        if (str.charAt(lo) != str.charAt(hi))
            return 0;

        lo++;
        hi--;
        return helper(str, lo, hi);
    }

    public int solve(String A) {

        return helper(A, 0, A.length() - 1);
    }
}
