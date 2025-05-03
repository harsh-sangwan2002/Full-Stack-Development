import java.util.Arrays;

public class FractionalKnapsack {

    private class Pair {

        int weight;
        int value;
        double ppu;

        Pair(int value, int weight, double ppu) {
            this.value = value;
            this.weight = weight;
            this.ppu = ppu;
        }
    }

    public int solve(int[] A, int[] B, int C) {

        int n = A.length;
        double ans = 0.0D;
        Pair[] pairs = new Pair[n];

        for (int i = 0; i < n; i++)
            pairs[i] = new Pair(A[i], B[i], A[i] * 1.00 / B[i]);

        Arrays.sort(pairs, (p1, p2) -> {

            if (p2.ppu < p1.ppu)
                return -1;

            else if (p1.ppu < p2.ppu)
                return 1;

            else
                return 0;
        });

        for (int i = 0; i < n; i++) {

            Pair pair = pairs[i];

            if (pair.weight <= C) {
                ans += pair.value;
                C -= pair.weight;
            }

            else {
                ans = (ans + pair.ppu * C);
                C = 0;
                break;
            }
        }

        ans = ans * 1000;
        return (int) ans / 10;
    }
}