package ProducerConsumer.ProducerConsumerMutex;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Client {

    public static void main(String[] args) {

        Queue<Object> store = new ArrayDeque<>();
        int maxSize = 6;

        Producer p1 = new Producer(store, "Producer1", maxSize);
        Producer p2 = new Producer(store, "Producer2", maxSize);
        Producer p3 = new Producer(store, "Producer3", maxSize);
        Producer p4 = new Producer(store, "Producer4", maxSize);
        Producer p5 = new Producer(store, "Producer5", maxSize);

        Consumer c1 = new Consumer(store, "Consumer1", maxSize);
        Consumer c2 = new Consumer(store, "Consumer2", maxSize);
        Consumer c3 = new Consumer(store, "Consumer3", maxSize);
        Consumer c4 = new Consumer(store, "Consumer4", maxSize);
        Consumer c5 = new Consumer(store, "Consumer5", maxSize);

        ExecutorService executorService = Executors.newCachedThreadPool();

        executorService.submit(p1);
        executorService.submit(p2);
        executorService.submit(p3);
        executorService.submit(p4);
        executorService.submit(p5);

        executorService.submit(c1);
        executorService.submit(c2);
        executorService.submit(c3);
        executorService.submit(c4);
        executorService.submit(c5);
    }
}
