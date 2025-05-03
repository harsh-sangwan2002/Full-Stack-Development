public class SearchElement {

    public int solve(int[][] A, int B) {

        int r = 0, c = A[0].length-1, ans = Integer.MAX_VALUE;

        while(r<A.length && c>=0){

            if(A[r][c]==B){
                int val = (r+1)*1009 + (c+1);
                ans = Math.min(ans,val);
                c--;
            }

            else if(A[r][c]>B)
            c--;
            
            else 
            r++;
        }

        return ans==Integer.MAX_VALUE ? -1:ans;
    }
}
