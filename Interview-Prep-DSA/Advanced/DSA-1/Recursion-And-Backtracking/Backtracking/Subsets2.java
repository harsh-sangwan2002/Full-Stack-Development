import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Subsets2 {

    private void solve(int[] arr, List<Integer> list, List<List<Integer>> res, int idx) {

        if (!res.contains(list))
            res.add(new ArrayList<>(list));

        for (int i = idx; i < arr.length; i++) {
            list.add(arr[i]);
            solve(arr, list, res, i + 1);
            list.remove(list.size() - 1);
        }
    }

    public int[][] subsetsWithDup(int[] A) {

        Arrays.sort(A);
        List<List<Integer>> res = new ArrayList<>();
        solve(A, new ArrayList<>(), res, 0);

        int[][] ans = new int[res.size()][];
        int idx1 = 0;

        for (List<Integer> list : res) {

            int[] temp = new int[list.size()];
            int idx2 = 0;

            for (int val : list)
                temp[idx2++] = val;

            ans[idx1++] = temp;
        }

        return ans;
    }
}
