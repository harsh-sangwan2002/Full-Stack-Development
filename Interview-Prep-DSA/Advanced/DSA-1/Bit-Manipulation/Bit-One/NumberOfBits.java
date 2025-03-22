public class NumberOfBits {
    
    public int numSetBits(int A) {

        int countOne = 0;

        while (A != 0) {

            if ((A & 1) == 1)
                countOne++;

            A = A >> 1;
        }

        return countOne;
    }
}
