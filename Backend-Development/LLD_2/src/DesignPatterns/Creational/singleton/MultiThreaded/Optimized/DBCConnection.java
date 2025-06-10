package DesignPatterns.Creational.singleton.MultiThreaded.Optimized;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class DBCConnection {

    private static DBCConnection dbc;
    private static final Lock lock = new ReentrantLock();

    private DBCConnection() {

    }

    // Way - 1
    // public static DBCConnection getInstance() {
    // if (dbc == null) {
    // synchronized (DBCConnection.class) {
    // if (dbc == null) {
    // dbc = new DBCConnection();
    // }
    // }
    // }
    // return dbc;
    // }

    // Way - 2
    public static DBCConnection getInstance() {
        if (dbc == null) {
            lock.lock();

            if (dbc == null) {
                try {
                    dbc = new DBCConnection();
                } finally {
                    lock.unlock();
                }
            }

            return dbc;
        }

        return dbc;
    }
}
