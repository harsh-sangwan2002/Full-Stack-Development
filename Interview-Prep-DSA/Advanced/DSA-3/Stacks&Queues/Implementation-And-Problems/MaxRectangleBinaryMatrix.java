import java.util.Stack;

public class MaxRectangleBinaryMatrix {

    private int[] leftSmaller(int[] A) {

        int[] res = new int[A.length];
        Stack<Integer> st = new Stack<>();

        for (int i = 0; i < A.length; i++) {

            while (st.size() != 0 && A[st.peek()] >= A[i])
                st.pop();

            if (st.size() == 0)
                res[i] = -1;

            else
                res[i] = st.peek();

            st.push(i);
        }

        return res;
    }

    private int[] rightSmaller(int[] A) {

        int[] res = new int[A.length];
        Stack<Integer> st = new Stack<>();

        for (int i = A.length - 1; i >= 0; i--) {

            while (st.size() != 0 && A[st.peek()] >= A[i])
                st.pop();

            if (st.size() == 0)
                res[i] = A.length;

            else
                res[i] = st.peek();

            st.push(i);
        }

        return res;
    }

    private int largestHistogram(int[] A) {

        int[] nsl = leftSmaller(A);
        int[] nsr = rightSmaller(A);

        int max_area = Integer.MIN_VALUE;

        for (int i = 0; i < A.length; i++) {

            int width = nsr[i] - nsl[i] - 1;
            int curr_area = width * A[i];

            max_area = Math.max(max_area, curr_area);
        }

        return max_area;
    }

    public int maximalRectangle(int[][] A) {

        int[] heights = new int[A[0].length];

        for (int i = 0; i < A[0].length; i++)
            heights[i] = A[0][i];

        int max_area = largestHistogram(heights);

        for (int i = 1; i < A.length; i++) {

            for (int j = 0; j < A[0].length; j++) {

                if (A[i][j] == 1)
                    heights[j]++;

                else
                    heights[j] = 0;
            }

            max_area = Math.max(max_area, largestHistogram(heights));
        }

        return max_area;
    }
}
