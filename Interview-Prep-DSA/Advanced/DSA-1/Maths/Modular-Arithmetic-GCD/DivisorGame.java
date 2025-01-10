public class DivisorGame {

    int gcd(int a, int b){

        if(a==0) return b;
        if(b==0) return a;

        return gcd(b,a%b);
    }

    public int solve(int A, int B, int C) {

        int lcm = B*C/gcd(B,C);
        return A/lcm;
    }
}
