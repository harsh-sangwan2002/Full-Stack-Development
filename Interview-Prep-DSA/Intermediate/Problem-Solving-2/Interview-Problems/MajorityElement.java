public class MajorityElement {

    public int majorityElement(final int[] A) {

        int n = A.length, ans = A[0], count = 1;

        for (int i = 1; i < n; i++) {

            int val = A[i];

            if (val == ans)
                count++;

            else {

                if (count == 0) {
                    ans = val;
                    count = 1;
                }

                else
                    count--;
            }
        }

        return ans;
    }
}
