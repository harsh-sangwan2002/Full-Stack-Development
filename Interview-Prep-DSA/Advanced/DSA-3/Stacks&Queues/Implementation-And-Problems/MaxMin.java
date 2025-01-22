import java.util.Stack;

public class MaxMin {

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

    private int[] leftGreater(int[] A) {

        int[] res = new int[A.length];
        Stack<Integer> st = new Stack<>();

        for (int i = 0; i < A.length; i++) {

            while (st.size() != 0 && A[st.peek()] <= A[i])
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

    private int[] rightGreater(int[] A) {

        int[] res = new int[A.length];
        Stack<Integer> st = new Stack<>();

        for (int i = A.length - 1; i >= 0; i--) {

            while (st.size() != 0 && A[st.peek()] <= A[i])
                st.pop();

            if (st.size() == 0)
                res[i] = A.length;

            else
                res[i] = st.peek();

            st.push(i);
        }

        return res;
    }

    public int solve(int[] A) {

        int[] nsl = leftSmaller(A);
        int[] nsr = rightSmaller(A);
        int[] ngl = leftGreater(A);
        int[] ngr = rightGreater(A);

        long ans = 0, mod = (long) (1e9 + 7);

        for (int i = 0; i < A.length; i++) {

            long max_contri = (ngr[i] - i) * 1L * (i - ngl[i]);
            long min_contri = (nsr[i] - i) * 1L * (i - nsl[i]);

            ans = (ans + A[i] * max_contri) % mod;
            ans = (ans - A[i] * min_contri) % mod;
            ans = (ans + mod) % mod;
        }

        return (int) ans;
    }
}
