public class SetBit {

    public int solve(int A, int B) {

        int ans = (1 << A);
        ans = ans | (1 << B);

        return ans;
    }
}
