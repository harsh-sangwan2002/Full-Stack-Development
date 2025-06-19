public class AddOneToNumber {

    private int countZeroes(int[] A) {

        int count = 0;

        for (int val : A) {
            if (val == 0)
                count++;

            else
                break;
        }

        return count;
    }

    public int[] plusOne(int[] A) {

        int n = A.length, zeroes = countZeroes(A);
        int[] res = new int[n - zeroes];

        for (int i = zeroes; i < A.length; i++)
            res[i - zeroes] = A[i];

        for (int i = res.length - 1; i >= 0; i--) {

            if (res[i] != 9) {
                res[i]++;
                return res;
            }

            res[i] = 0;
        }

        res = new int[res.length + 1];
        res[0] = 1;
        return res;
    }
}
