public class ClosestMinMax {

    private int[] findMinMax(int[] A){

        int min = A[0], max = A[0];

        for(int val : A){
            min = Math.min(val,min);
            max = Math.max(val,max);
        }

        return new int[]{min,max};
    }

    public int solve(int[] A) {

        int[] minMax = findMinMax(A);
        int n = A.length, last_min_idx = -1, last_max_idx = -1, min = minMax[0], max = minMax[1], ans = n;

        if(max==min)
        return 1;


        for(int i=0; i<n; i++){

            if(A[i]==min){

                if(last_max_idx!=-1)
                ans = Math.min(ans,i-last_max_idx+1);

                last_min_idx = i;
            }

            else if(A[i]==max){

                if(last_min_idx!=-1)
                ans = Math.min(ans,i-last_min_idx+1);

                last_max_idx = i;
            }
        }

        return ans;
    }
}
