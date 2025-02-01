package UniqueBST;

public class sol2 {

    public int numTrees(int A) {

        long ans = 1;

        for (int i = 0; i < A; i++) {
            ans = ans * (2 * A - i);
            ans = ans / (i + 1);
        }

        ans = ans / (A + 1);
        return (int) ans;
    }
}
