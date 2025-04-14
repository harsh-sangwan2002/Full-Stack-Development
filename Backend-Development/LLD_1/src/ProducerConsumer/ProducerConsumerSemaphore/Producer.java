package ProducerConsumer.ProducerConsumerSemaphore;

import java.util.Queue;
import java.util.concurrent.Semaphore;

public class Producer implements Runnable{

    private final Queue<Object> store;
    private final String name;
    private final int maxSize;
    private final Semaphore producerSemaphore;
    private final Semaphore consumerSemaphore;

    public Producer(Queue<Object> store, String name, int maxSize, Semaphore producerSemaphore, Semaphore consumerSemaphore) {
        this.store = store;
        this.name = name;
        this.maxSize = maxSize;
        this.producerSemaphore = producerSemaphore;
        this.consumerSemaphore = consumerSemaphore;
    }

    @Override
    public void run(){
        while(true){
            try{
                producerSemaphore.acquire();
            }catch(Exception e){
                throw new RuntimeException(e);
            }
            System.out.println("Producer " + name + " produced an item. Current size: " + store.size());
            store.add(new Object());
            consumerSemaphore.release();
        }
    }
}
