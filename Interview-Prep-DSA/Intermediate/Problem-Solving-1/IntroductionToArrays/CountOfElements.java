public class CountOfElements {
    
    public int solve(int[] A) {

        int count = 0, max = A[0];

        for(int val : A)
        max = Math.max(max,val);
        
        for(int val : A){

            if(val!=max)
            count++;
        }

        return count;
    }
}
