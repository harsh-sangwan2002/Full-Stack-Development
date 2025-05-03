public class CountSort {

    private int[] findMaxMin(int[] arr){

        int max = Integer.MIN_VALUE, min = Integer.MAX_VALUE;

        for(int val : arr){
            max = Math.max(max,val);
            min = Math.min(min,val);
        }

        return new int[]{min,max};
    }

    public int[] solve(int[] A) {

        int[] maxMin = findMaxMin(A);
        int max = maxMin[1], min = maxMin[0];
        int[] freq = new int[max-min+1];

        for(int val : A)
        freq[val-min]++;

        int idx = 0;

        for(int i=0; i<freq.length; i++){

            for(int j=1; j<=freq[i]; j++)
            A[idx++] = i+min;
        }

        return A;
    }
}
