package DesignPatterns.singleton;

import java.util.concurrent.locks.ReentrantLock;

public class DBC {

    private static DBC dbc;
    private static final ReentrantLock lock = new ReentrantLock();

    private DBC(){}

    public static DBC getInstance(){

        if(dbc==null){

            lock.lock();

            if(dbc==null)
                dbc = new DBC();

            lock.unlock();
        }

        return dbc;
    }
}
