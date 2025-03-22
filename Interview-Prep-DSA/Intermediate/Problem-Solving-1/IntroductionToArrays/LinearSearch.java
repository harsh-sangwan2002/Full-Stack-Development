public class LinearSearch {

    public int solve(int[] A, int B) {

        int noOfOccurences = 0;

        for (int val : A) {

            if (val == B)
                noOfOccurences++;
        }

        return noOfOccurences;
    }
}
