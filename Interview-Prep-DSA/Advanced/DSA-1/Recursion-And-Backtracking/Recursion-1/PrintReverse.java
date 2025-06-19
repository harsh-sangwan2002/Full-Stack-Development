public class PrintReverse {

    private void helper(int n) {

        if (n == 0)
            return;

        System.out.print(n + " ");
        helper(n - 1);
    }

    public void solve(int A) {

        helper(A);
        System.out.println();
    }
}
