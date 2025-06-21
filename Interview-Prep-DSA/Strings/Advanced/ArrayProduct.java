public class ArrayProduct {

    private static int[] productArray(int[] arr) {

        int n = arr.length;
        int[] res = new int[n];
        int[] right = new int[n];

        int product = 1;
        for (int i = n - 1; i >= 0; i--) {

            product *= arr[i];
            right[i] = product;
        }

        product = 1;
        for (int i = 0; i < n - 1; i++) {
            res[i] = product * right[i + 1];
            product *= arr[i];
        }
        res[n - 1] = product;
        return res;
    }

    public static void main(String[] args) {

        int[] arr = { 1, 2, 3, 2, 5, 4 };
        int[] res = productArray(arr);

        for (int val : res)
            System.out.print(val + " ");

        System.out.println();
    }
}
