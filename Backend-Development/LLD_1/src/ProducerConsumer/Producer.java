package ProducerConsumer;

import java.util.Queue;

public class Producer implements Runnable{

    private Queue<Object> store;
    private String name;
    private int maxSize;

    public Producer(Queue<Object> store, String name, int maxSize) {
        this.store = store;
        this.name = name;
        this.maxSize = maxSize;
    }

    @Override
    public void run(){
        while(true){
            if(store.size() < maxSize){
                System.out.println("Producer " + name + " produced an item. Current size: " + store.size());
                store.add(new Object());
            }
        }
    }
}
