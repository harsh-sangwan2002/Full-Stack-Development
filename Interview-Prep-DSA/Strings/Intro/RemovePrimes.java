import java.util.ArrayList;

public class RemovePrimes {

    private static boolean isPrime(int n) {

        if (n == 1)
            return false;

        for (int div = 2; div * div <= n; div++) {

            if (n % div == 0)
                return false;
        }

        return true;
    }

    private static void removePrimes(ArrayList<Integer> list) {

        for (int i = list.size() - 1; i >= 0; i--) {

            if (isPrime(list.get(i)))
                list.remove(i);
        }
    }

    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);

        removePrimes(list);

        for (int val : list)
            System.out.print(val + " ");
    }
}
