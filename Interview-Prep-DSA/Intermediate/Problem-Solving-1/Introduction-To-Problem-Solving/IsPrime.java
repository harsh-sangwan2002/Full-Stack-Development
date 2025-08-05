// TC -> O(sqrt(N))
// SC -> O(1)
public class IsPrime {

    public int solve(int A) {

        if (A == 1)
            return 0;

        for (int n = 2; n <= Math.sqrt(A); n++) {

            if (A % n == 0)
                return 0;
        }

        return 1;
    }
}
