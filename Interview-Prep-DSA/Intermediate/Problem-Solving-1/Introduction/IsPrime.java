public class IsPrime {

    public int solve(int A) {

        for (int i = 2; i <= Math.sqrt(A); i++) {

            if (A % i == 0)
                return 0;
        }

        return 1;
    }
}
