import java.util.Arrays;

public class AssignMiceToHoles {

    public int mice(int[] A, int[] B) {

        Arrays.sort(A);
        Arrays.sort(B);
        int n = A.length, maxTime = 0;

        for (int i = 0; i < n; i++)
            maxTime = Math.max(maxTime, Math.abs(A[i] - B[i]));

        return maxTime;
    }
}
