package Concurrency02.Executors;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {

    public static void main(String[] args) {

        NumberPrinter numberPrinter;
        ExecutorService executorService = Executors.newFixedThreadPool(10);

        for(int i=1; i<=100; i++){
            numberPrinter = new NumberPrinter(i);
            executorService.submit(numberPrinter);
        }

        executorService.shutdown();
    }
}
