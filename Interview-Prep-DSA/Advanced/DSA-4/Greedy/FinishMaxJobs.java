import java.util.Arrays;

public class FinishMaxJobs {

    private class Pair {
        int st;
        int et;

        Pair(int st, int et) {
            this.st = st;
            this.et = et;
        }
    }

    public int solve(int[] A, int[] B) {

        int n = A.length;
        Pair[] pairs = new Pair[n];

        for (int i = 0; i < n; i++)
            pairs[i] = new Pair(A[i], B[i]);

        Arrays.sort(pairs, (p1, p2) -> p1.et - p2.et);
        int prevEndTime = pairs[0].et, jobs = 1;

        for (int i = 1; i < n; i++) {

            if (pairs[i].st >= prevEndTime) {
                jobs++;
                prevEndTime = pairs[i].et;
            }
        }

        return jobs;
    }
}
