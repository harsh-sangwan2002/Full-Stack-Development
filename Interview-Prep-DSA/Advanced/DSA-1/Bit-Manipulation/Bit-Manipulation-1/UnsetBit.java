public class UnsetBit {

    public int solve(int A, int B) {

        if ((A & (1 << B)) != 0)
            A = A ^ (1 << B);

        return A;
    }
}
