package ProducerConsumer.Solution;

import java.util.Queue;

public class Consumer implements Runnable{

    private final String name;
    private final int maxSize;
    private final Queue<Object> store;

    public Consumer(String name, int maxSize, Queue<Object> store){
        this.name = name;
        this.maxSize = maxSize;
        this.store = store;
    }

    @Override
    public void run(){
        while(true){
            if(this.store.size() > 0){
                System.out.println("Consumer " + this.name + " is consuming, store size: " + this.store.size());
                this.store.remove();
            }
        }
    }
}
