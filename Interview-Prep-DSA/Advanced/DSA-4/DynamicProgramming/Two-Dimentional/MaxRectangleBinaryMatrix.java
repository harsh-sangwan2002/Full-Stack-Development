import java.util.Stack;

public class MaxRectangleBinaryMatrix {

    private int[] leftSmaller(int[] A) {

        int n = A.length;
        Stack<Integer> st = new Stack<>();
        int[] res = new int[n];

        for (int i = 0; i < n; i++) {

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

    public int[] rightSmaller(int[] A) {

        int n = A.length;
        Stack<Integer> st = new Stack<>();
        int[] res = new int[n];

        for (int i = n - 1; i >= 0; i--) {

            while (st.size() != 0 && A[st.peek()] >= A[i])
                st.pop();

            if (st.size() == 0)
                res[i] = n;

            else
                res[i] = st.peek();

            st.push(i);
        }

        return res;
    }

    private int histogram(int[] A) {

        int n = A.length;
        int[] left = leftSmaller(A);
        int[] right = rightSmaller(A);
        int ans = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {

            int width = right[i] - left[i] - 1;
            int area = A[i] * width;
            ans = Math.max(ans, area);
        }

        return ans;
    }

    public int maximalRectangle(int[][] A) {

        int n = A.length, m = A[0].length;
        int[] heights = new int[m];

        for (int i = 0; i < m; i++)
            heights[i] = A[0][i];

        int area = histogram(heights);

        for (int i = 1; i < n; i++) {

            for (int j = 0; j < m; j++) {

                if (A[i][j] == 1)
                    heights[j] += 1;

                else
                    heights[j] = 0;
            }

            int currArea = histogram(heights);
            area = Math.max(area, currArea);
        }

        return area;
    }
}
