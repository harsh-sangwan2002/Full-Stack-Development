package ProducerConsumer;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Client {

    public static void main(String[] args) {

        int maxSize = 6;
        Queue<Object> queue = new ArrayDeque<>();
        Producer p1 = new Producer("P1",maxSize,queue);
        Producer p2 = new Producer("P2",maxSize,queue);
        Producer p3 = new Producer("P3",maxSize,queue);
        Producer p4 = new Producer("P4",maxSize,queue);
        Producer p5 = new Producer("P5",maxSize,queue);
        Producer p6 = new Producer("P6",maxSize,queue);

        Consumer c1 = new Consumer("C1",maxSize,queue);
        Consumer c2 = new Consumer("C2",maxSize,queue);
        Consumer c3 = new Consumer("C3",maxSize,queue);
        Consumer c4 = new Consumer("C4",maxSize,queue);
        Consumer c5 = new Consumer("C5",maxSize,queue);
        Consumer c6 = new Consumer("C6",maxSize,queue);

        ExecutorService executorService = Executors.newCachedThreadPool();

        executorService.submit(p1);
        executorService.submit(p2);
        executorService.submit(p3);
        executorService.submit(p4);
        executorService.submit(p5);
        executorService.submit(p6);

        executorService.submit(c1);
        executorService.submit(c2);
        executorService.submit(c3);
        executorService.submit(c4);
        executorService.submit(c5);
        executorService.submit(c6);
    }
}
