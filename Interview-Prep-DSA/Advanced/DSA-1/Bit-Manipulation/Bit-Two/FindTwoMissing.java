import java.util.Arrays;

public class FindTwoMissing {

    private boolean check(int n, int pos){

        if((n&(1<<pos))!=0)
        return true;

        else
        return false;
    }
    public int[] solve(int[] A) {

        int n = A.length, xor = 0;

        for(int val : A)
        xor ^= val;

        for(int i=1; i<=n+2; i++)
        xor ^= i;

        int pos = 0;
        while(xor!=0){

            if(check(xor,pos))
            break;

            pos++;
        }

        int set = 0, unset = 0;
        for(int val : A){

            if(check(val,pos))
            set ^= val;

            else 
            unset ^= val;
        }

        for(int i=1; i<=n+2; i++){

            if(check(i,pos))
            set ^= i;

            else 
            unset ^= i;
        }

        int[] arr = new int[2];
        arr[0] = set; arr[1] = unset;
        Arrays.sort(arr);

        return arr;
    }
}
