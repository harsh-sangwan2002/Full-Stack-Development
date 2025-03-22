public class SpiralOrder {
    
    public int[][] generateMatrix(int A) {

        int ele = A * A, count = 1, minC = 0, minR = 0, maxC = A - 1, maxR = A - 1;
        int[][] res = new int[A][A];

        while (count <= ele) {

            // Top boundary
            for (int col = minC; col <= maxC && count <= ele; col++) {
                res[minR][col] = count;
                count++;
            }
            minR++;

            // Right boundary
            for (int row = minR; row <= maxR && count <= ele; row++) {
                res[row][maxC] = count;
                count++;
            }
            maxC--;

            // Bottom boundary
            for (int col = maxC; col >= minC && count <= ele; col--) {
                res[maxR][col] = count;
                count++;
            }
            maxR--;

            // Left boundary
            for (int row = maxR; row >= minR && count <= ele; row--) {
                res[row][minC] = count;
                count++;
            }
            minC++;
        }

        return res;
    }
}
