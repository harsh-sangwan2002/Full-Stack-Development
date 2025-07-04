import java.util.Arrays;

// TC -> O(N*log(N))
// SC -> O(log(N))
public class KthSmallesElement {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int kthsmallest(final int[] A, int B) {

        Arrays.sort(A);
        return A[B - 1];
    }
}
