public class WaterContainer {

    private static int maxArea(int[] height) {

        int maxArea = 0;
        int left = 0, right = height.length - 1;

        while (left < right) {
            int width = right - left;
            int currentHeight = Math.min(height[left], height[right]);
            maxArea = Math.max(maxArea, width * currentHeight);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }

    public static void main(String[] args) {

        int[] height = { 1, 8, 6, 2, 5, 4, 8, 3, 7 };
        int maxArea = maxArea(height);
        System.out.println("Maximum area of water container: " + maxArea);
    }
}
