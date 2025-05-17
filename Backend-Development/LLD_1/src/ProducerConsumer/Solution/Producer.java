package ProducerConsumer.Solution;

import java.util.Queue;

public class Producer implements Runnable{

    private final String name;
    private final int maxSize;
    private final Queue<Object> store;

    public Producer(String name, int maxSize, Queue<Object> store){
        this.name = name;
        this.maxSize = maxSize;
        this.store = store;
    }

    @Override
    public void run(){
        while(true){
            if(store.size() < maxSize){
                System.out.println("Producer " + this.name + " is producing, store size: " + store.size());
                store.add(new Object());
            }
        }
    }
}
