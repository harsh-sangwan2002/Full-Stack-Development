public class SumOfDigits {

    public int solve(int A) {

        if (A == 0)
            return 0;

        int ld = A % 10;
        A /= 10;
        return ld + solve(A);
    }
}
