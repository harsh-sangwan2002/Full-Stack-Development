import java.util.HashMap;

public class PairSum {
    
    public int solve(int[] A, int B) {

        long ans = 0, mod = (long)(1e9+7);

        for(int i=0; i<A.length; i++)
        A[i]%=B;

        HashMap<Integer,Integer> map = new HashMap<>();

        for(int val : A)
        map.put(val,map.getOrDefault(val,0)+1);

        long count = map.getOrDefault(0,0)*1L;
        count = (count*(count-1)/2)%mod;
        ans = count;

        if(B%2==0){

            count = map.getOrDefault(B/2,0);
            count = (count*(count-1)/2)%mod;
            ans = (ans+count)%mod;
        }

        for(int i=1; i<(B+1)/2; i++){

            int a = map.getOrDefault(i,0);
            int b = map.getOrDefault(B-i,0);
            count = (a*b*1L)%mod;
            ans = (ans+count)%mod;
        }

        return (int)ans;
    }
}
