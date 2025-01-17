public class ContainerWithMostWater {

    public int maxArea(int[] A) {

        int i = 0, j = A.length - 1;
        int area = 0;

        while (i < j) {

            int width = j - i;
            int height = Math.min(A[i], A[j]);
            int curr = height * width;
            area = Math.max(area, curr);

            if (A[i] < A[j])
                i++;

            else
                j--;
        }

        return area;
    }
}
