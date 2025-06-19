public class KthSymbolHard {

    public int solve(int A, long B) {

        if (A == 1)
            return 0;

        int val = solve(A - 1, B / 2);

        if (B % 2 == 0)
            return val;

        return 1 - val;
    }
}
