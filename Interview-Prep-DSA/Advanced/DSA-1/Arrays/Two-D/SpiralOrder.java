public class SpiralOrder {

    public int[][] generateMatrix(int A) {

        int[][] mat = new int[A][A];
        int minR = 0, minC = 0, maxR = A - 1, maxC = A - 1;
        int te = A * A, count = 1;

        while (count <= te) {

            // Top boundary
            for (int i = minC; i <= maxC && count <= te; i++) {
                mat[minR][i] = count;
                count++;
            }
            minR++;

            // Right boundary
            for (int i = minR; i <= maxR && count <= te; i++) {
                mat[i][maxC] = count;
                count++;
            }
            maxC--;

            // Bottom boundary
            for (int i = maxC; i >= minC && count <= te; i--) {
                mat[maxR][i] = count;
                count++;
            }
            maxR--;

            // Left boundary
            for (int i = maxR; i >= minR && count <= te; i--) {
                mat[i][minC] = count;
                count++;
            }
            minC++;
        }

        return mat;
    }
}
