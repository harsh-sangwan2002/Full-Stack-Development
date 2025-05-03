import java.util.Stack;

public class LargestAreaHistorgram {

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

    public int largestRectangleArea(int[] A) {

        int[] left = leftSmaller(A);
        int[] right = rightSmaller(A);

        int max_area = Integer.MIN_VALUE;

        for (int i = 0; i < A.length; i++) {

            int width = right[i] - left[i] - 1;
            int currArea = width * A[i];

            max_area = Math.max(currArea, max_area);
        }

        return max_area;
    }
}