package MaxHeightStairCase;

public class sol1 {

    public int solve(int A) {

        if (A == 0)
            return 0;

        int stair = 2, sum = 1;

        while (sum + stair <= A) {

            sum += stair;
            stair++;
        }

        return stair - 1;
    }
}
