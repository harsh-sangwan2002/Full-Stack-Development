public class GoodDays {

    private boolean checkBit(int n) {

        if ((n & 1) != 0)
            return true;

        return false;
    }

    public int solve(int A) {

        int days = 0;

        while (A != 0) {

            if (checkBit(A))
                days++;

            A = A >> 1;
        }

        return days;
    }
}
