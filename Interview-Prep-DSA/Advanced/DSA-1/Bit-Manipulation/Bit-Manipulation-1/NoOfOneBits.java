public class NoOfOneBits {

    public int numSetBits(int A) {

        int ones = 0;

        while (A != 0) {

            if ((A & 1) == 1)
                ones++;

            A = A >> 1;
        }

        return ones;
    }
}
