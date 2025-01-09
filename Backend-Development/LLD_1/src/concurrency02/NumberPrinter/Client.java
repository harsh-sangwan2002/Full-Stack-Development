package concurrency02.NumberPrinter;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Client {

    public static void main(String[] args) {

        NumberPrinter numberPrinter = null;
//        Thread t = null;
//
//        for(int i=1; i<=100; i++){
//            numberPrinter = new NumberPrinter(i);
//            t = new Thread(numberPrinter);
//            t.start();
//        }

        ExecutorService executorService = Executors.newFixedThreadPool(100);

        for(int i=1; i<=100; i++){
            numberPrinter = new NumberPrinter(i);
            executorService.submit(numberPrinter);
        }
    }
}
