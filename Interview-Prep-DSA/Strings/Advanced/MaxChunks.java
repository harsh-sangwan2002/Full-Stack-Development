public class MaxChunks {

    private static int maxChunksToSorted(int[] arr) {

        int max = 0, chunks = 0;

        for (int i = 0; i < arr.length; i++) {
            max = Math.max(max, arr[i]);
            if (max == i) {
                chunks++;
            }
        }

        return chunks;
    }

    public static void main(String[] args) {

        int[] arr = { 1, 0, 2, 3, 4 };
        int maxChunks = maxChunksToSorted(arr);
        System.out.println(maxChunks);
    }
}