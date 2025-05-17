package ProducerConsumer.Semaphore;

import java.util.Queue;
import java.util.concurrent.Semaphore;

public class Producer implements Runnable{

    private final String name;
    private final int maxSize;
    private final Queue<Object> store;
    private final Semaphore producerSemaphore;
    private final Semaphore consumerSemaphore;

    public Producer(String name, int maxSize, Queue<Object> store, Semaphore producerSemaphore, Semaphore consumerSemaphore){
        this.name = name;
        this.maxSize = maxSize;
        this.store = store;
        this.producerSemaphore = producerSemaphore;
        this.consumerSemaphore = consumerSemaphore;
    }

    @Override
    public void run(){
        while(true){
            try{
                producerSemaphore.acquire();
            }catch (Exception e){

            }
            System.out.println("Producer " + this.name + " is producing, store size: " + store.size());
            store.add(new Object());
            consumerSemaphore.release();
        }
    }
}
