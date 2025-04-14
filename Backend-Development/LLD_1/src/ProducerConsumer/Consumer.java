package ProducerConsumer;

import java.util.Queue;

public class Consumer<S> implements Runnable{

    private final Queue<Object> store;
    private final String name;
    private final int maxSize;

    public Consumer(Queue<Object> store, String name, int maxSize) {
        this.store = store;
        this.name = name;
        this.maxSize = maxSize;
    }

    @Override
    public void run(){
        while(true){
            if(!store.isEmpty()){
                System.out.println("Consumer " + name + " consumed an item. Current size: " + store.size());
                store.remove();
            }
        }
    }
}
