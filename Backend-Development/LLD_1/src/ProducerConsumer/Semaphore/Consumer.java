package ProducerConsumer.Semaphore;

import java.util.Queue;
import java.util.concurrent.Semaphore;

public class Consumer implements Runnable{

    private final String name;
    private final int maxSize;
    private final Queue<Object> store;
    private final Semaphore producerSemaphore;
    private final Semaphore consumerSemaphore;

    public Consumer(String name, int maxSize, Queue<Object> store, Semaphore producerSemaphore, Semaphore consumerSemaphore){
        this.name = name;
        this.maxSize = maxSize;
        this.store = store;
        this.producerSemaphore = producerSemaphore;
        this.consumerSemaphore = consumerSemaphore;
    }

    @Override
    public void run(){
        while(true){

            try {
                consumerSemaphore.acquire();
            }catch (Exception e){
                e.printStackTrace();
            }
            System.out.println("Consumer " + this.name + " is consuming, store size: " + this.store.size());
            this.store.remove();
            producerSemaphore.release();
        }
    }
}
