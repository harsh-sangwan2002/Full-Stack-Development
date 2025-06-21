public class GasStation {

    private static int canCompleteCircuit(int[] gas, int[] cost) {

        int totalGas = 0, totalCost = 0, currGas = 0, st = 0;

        for (int i = 0; i < gas.length; i++) {
            totalGas += gas[i];
            totalCost += cost[i];

            currGas += gas[i] - cost[i];
            if (currGas < 0) {
                st = i + 1;
                currGas = 0;
            }
        }

        return totalGas >= totalCost ? st : -1;
    }

    public static void main(String[] args) {

        int[] gas = { 1, 2, 3, 4, 5 };
        int[] cost = { 3, 4, 5, 1, 2 };
        int start = canCompleteCircuit(gas, cost);

        if (start != -1) {
            System.out.println("Start at station: " + start);
        } else {
            System.out.println("Cannot complete circuit");
        }
    }
}
