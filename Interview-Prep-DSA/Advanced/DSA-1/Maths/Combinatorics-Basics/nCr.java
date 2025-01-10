public class nCr {
    
    public int solve(int A, int B, int C) {

        long[][] dp = new long[A+1][B+1];

        for(int i=0; i<dp.length; i++){

            for(int j=0; j<=B; j++){

                if(i==0 || j==0 || i==j)
                dp[i][j] = 1L;

                else 
                dp[i][j] = (dp[i-1][j-1]+dp[i-1][j]+0L)%C;
            }
        }


        return (int)dp[A][B];
    }
}
