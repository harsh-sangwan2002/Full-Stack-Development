package AdderSubtractor.AdderSubtractorLock;

import java.util.concurrent.locks.Lock;

public class Subtractor implements  Runnable{

    Count count;
    Lock lock;

    public Subtractor(Count count, Lock lock){
        this.count = count;
        this.lock = lock;
    }

    @Override
    public void run(){

        for(int i=0; i<100; i++){
            lock.lock(); // acquire
            count.value -= i;
            lock.unlock(); // release
        }
    }
}
