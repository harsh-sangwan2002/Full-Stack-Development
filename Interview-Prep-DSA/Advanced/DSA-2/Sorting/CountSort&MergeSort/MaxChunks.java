public class MaxChunks {
    
    public int solve(int[] A) {

        int chunks = 0, max = A[0];

        for (int i = 0; i < A.length; i++) {

            max = Math.max(max, A[i]);

            if (max == i)
                chunks++;
        }

        return chunks;
    }
}
