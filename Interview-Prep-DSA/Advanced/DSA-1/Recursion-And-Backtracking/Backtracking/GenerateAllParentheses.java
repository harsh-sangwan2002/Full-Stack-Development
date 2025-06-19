import java.util.ArrayList;
import java.util.List;

public class GenerateAllParentheses {

    List<String> list;

    private void solve(int open, int close, int n, String ans) {

        if (ans.length() == 2 * n) {
            list.add(ans);
            return;
        }

        if (open < n)
            solve(open + 1, close, n, ans + "(");

        if (close < open)
            solve(open, close + 1, n, ans + ")");
    }

    public String[] generateParenthesis(int A) {

        list = new ArrayList<>();
        solve(0, 0, A, "");

        String[] res = new String[list.size()];
        int idx = 0;

        for (String val : list)
            res[idx++] = val;

        return res;
    }
}
