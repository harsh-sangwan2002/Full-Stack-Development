import java.util.ArrayList;
import java.util.List;

public class LetterPhone {

    String[] codes = { "0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

    private void solve(String str, List<String> list, String ans) {

        if (str.length() == 0) {

            String temp = new String(ans);
            list.add(temp);
            return;
        }

        char ch = str.charAt(0);
        String ros = str.substring(1);

        for (int i = 0; i < codes[ch - '0'].length(); i++) {
            solve(ros, list, ans + codes[ch - '0'].charAt(i));
        }
    }

    public String[] letterCombinations(String A) {

        List<String> list = new ArrayList<>();
        solve(A, list, "");

        String[] res = new String[list.size()];
        int idx = 0;

        for (String str : list)
            res[idx++] = str;

        return res;
    }
}
