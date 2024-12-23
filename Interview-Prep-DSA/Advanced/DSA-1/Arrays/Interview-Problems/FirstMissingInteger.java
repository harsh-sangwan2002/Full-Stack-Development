public class FirstMissingInteger {

    public int firstMissingPositive(int[] A) {

        int N = A.length;
        for(int i=0; i<N; i++){
            if(A[i]<=0)
            A[i] = N+2;
        }

        for(int i=0; i<N; i++){

            int idx = Math.abs(A[i])-1;
            if(idx>=0 && idx<N){
                if(A[idx]>0)
                A[idx]*=-1;
            }
        }

        for(int i=0; i<N; i++){
            if(A[i]>=0)
            return i+1;
        }
        
        return N+1;
    }
}
