import java.util.Scanner;

public class InsertionSort {

    private static void insertionSort(int[] arr) {

        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int j = i - 1;

            while (j >= 0 && arr[j] > arr[j + 1]) {

                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                j--;
            }
        }
    }

    private static void printArray(int[] arr) {

        for (int val : arr) {
            System.out.print(val + " ");
        }
    }

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        insertionSort(arr);
        printArray(arr);
        System.out.println();

        scn.close();
    }
}
