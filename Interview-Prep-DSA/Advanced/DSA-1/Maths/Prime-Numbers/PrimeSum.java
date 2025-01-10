public class PrimeSum {
    
    public int[] primesum(int A) {

        boolean[] primes = new boolean[A+1];

        for(int i=2; i<=Math.sqrt(A); i++){

            if(primes[i]==false){
                
                for(int j=i*i; j<=A; j+=i)
                primes[j] = true;
            }
        }

        for(int i=2; i<=A; i++){

            if(!primes[i] && !primes[A-i]){
                return new int[]{i,A-i};
            }
        }

        return new int[]{-1,-1};
    }
}
