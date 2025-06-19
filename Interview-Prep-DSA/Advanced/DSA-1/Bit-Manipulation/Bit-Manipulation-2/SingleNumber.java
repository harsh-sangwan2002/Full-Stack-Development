public class SingleNumber {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int singleNumber(final int[] A) {

        int xor = 0;

        for (int val : A)
            xor ^= val;

        return xor;
    }
}
