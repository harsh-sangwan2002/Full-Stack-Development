public class SetBit {

    public int solve(int A, int B) {

        int res = 1 << A;
        res = res | (1 << B);

        return res;
    }
}
