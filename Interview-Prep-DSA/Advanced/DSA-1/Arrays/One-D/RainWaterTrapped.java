public class RainWaterTrapped {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY

    private int[] findLeftMax(int[] A) {

        int[] res = new int[A.length];

        for (int i = 0; i < A.length; i++) {

            if (i == 0)
                res[i] = A[i];

            else
                res[i] = Math.max(res[i - 1], A[i]);
        }

        return res;
    }

    private int[] findRightMax(int[] A) {

        int[] res = new int[A.length];

        for (int i = A.length - 1; i >= 0; i--) {

            if (i == A.length - 1)
                res[i] = A[i];

            else
                res[i] = Math.max(res[i + 1], A[i]);
        }

        return res;
    }

    public int trap(final int[] A) {

        int[] leftMax = findLeftMax(A);
        int[] rightMax = findRightMax(A);
        int waterTrapped = 0;

        for (int i = 1; i < A.length - 1; i++) {

            int min = Math.min(leftMax[i - 1], rightMax[i + 1]);
            int currWaterTrapped = min - A[i];

            if (currWaterTrapped > 0)
                waterTrapped += currWaterTrapped;
        }

        return waterTrapped;
    }
}
