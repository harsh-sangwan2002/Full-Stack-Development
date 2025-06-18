public class MajorityElement {

    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int majorityElement(final int[] A) {

        int count = 0, ele = 0;

        for (int val : A) {

            if (count == 0) {
                ele = val;
                count++;
            }

            else {

                if (val == ele)
                    count++;

                else
                    count--;
            }
        }

        return ele;
    }
}
