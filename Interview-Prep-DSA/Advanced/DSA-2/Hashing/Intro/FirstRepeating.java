import java.util.HashMap;

public class FirstRepeating {
    
    public int solve(int[] A) {

        HashMap<Integer,Integer> map = new HashMap<>();

        for(int val : A)
        map.put(val,map.getOrDefault(val,0)+1);

        for(int val : A){

            if(map.get(val)>1)
            return val;
        }

        return -1;
    }
}
