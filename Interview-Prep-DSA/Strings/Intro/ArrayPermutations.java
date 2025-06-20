public class ArrayPermutations {

    private static int[][] res;
    private static int idx1;
    private static boolean[] vis;

    private static int factorial(int n) {

        if (n == 0 || n == 1)
            return 1;

        return n * factorial(n - 1);
    }

    private static void generate(int[] arr, int[] ans, int idx2) {

        if (idx2 == arr.length) {
            int[] temp = new int[ans.length];
            int curr = 0;

            for (int val : ans)
                temp[curr++] = val;

            res[idx1++] = temp;
            return;
        }

        for (int i = 0; i < arr.length; i++) {

            if (!vis[i]) {
                ans[idx2] = arr[i];
                vis[i] = true;
                generate(arr, ans, idx2 + 1);
                vis[i] = false;
            }
        }
    }

    private static int[][] permute(int[] arr) {

        int n = arr.length, size = factorial(n);
        idx1 = 0;
        res = new int[size][n];
        vis = new boolean[n];

        generate(arr, new int[n], 0);

        return res;
    }

    public static void main(String[] args) {

        int[] arr = { 1, 2, 3 };
        int[][] res = permute(arr);

        for (int[] temp : res) {

            for (int val : temp)
                System.out.print(val + " ");

            System.out.println();
        }
    }
}
