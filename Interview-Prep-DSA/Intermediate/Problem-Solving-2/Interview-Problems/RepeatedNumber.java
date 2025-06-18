public class RepeatedNumber {

    public int repeatedNumber(int[] A) {

        int ans1 = 0, count1 = 0, ans2 = 0, count2 = 0;

        for (int val : A) {

            if (val == ans1)
                count1++;

            else if (val == ans2)
                count2++;

            else if (count1 == 0) {
                ans1 = val;
                count1++;
            }

            else if (count2 == 0) {
                ans2 = val;
                count2++;
            }

            else {
                count1--;
                count2--;
            }
        }

        int n = A.length;
        int k = n / 3;
        count1 = 0;
        count2 = 0;

        for (int val : A) {
            if (ans1 == val)
                count1++;

            else if (ans2 == val)
                count2++;
        }

        if (count1 > k)
            return ans1;
        if (count2 > k)
            return ans2;

        return -1;
    }
}
