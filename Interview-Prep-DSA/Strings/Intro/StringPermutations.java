public class StringPermutations {

    private static int factorial(int n) {

        if (n == 0 || n == 1)
            return 1;

        return n * factorial(n - 1);
    }

    private static void permute(String str) {

        int n = str.length(), size = factorial(n);

        for (int i = 0; i < size; i++) {

            StringBuilder sb = new StringBuilder(str);
            int temp = i;

            for (int div = n; div >= 1; div--) {
                int q = temp / div, rem = temp % div;

                System.out.print(sb.charAt(rem));
                sb.deleteCharAt(rem);

                temp = q;
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {

        String str = "abc";
        permute(str);
    }
}
