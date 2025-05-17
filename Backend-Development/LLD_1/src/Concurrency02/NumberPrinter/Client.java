package Concurrency02.NumberPrinter;

public class Client {

    public static void main(String[] args) {

        NumberPrinter numberPrinter = null;
        Thread t = null;

        for(int i=1; i<=1000000; i++) {
            numberPrinter = new NumberPrinter(i);
            t = new Thread(numberPrinter);
            t.start();
        }

    }
}
