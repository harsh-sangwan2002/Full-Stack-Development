public class SumOfDigits {
    public int solve(int A) {

        if (A == 0 || A == 1)
            return A;

        int sum = A % 10;
        sum += solve(A / 10);

        return sum;
    }
}
