public class ToggleBit {
    
    public int solve(int A, int B) {

        A = A ^ (1 << B);
        return A;
    }
}
