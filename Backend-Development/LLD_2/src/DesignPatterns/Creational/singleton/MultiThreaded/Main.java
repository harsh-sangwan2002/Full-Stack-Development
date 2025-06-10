package DesignPatterns.Creational.singleton.MultiThreaded;

public class Main {

    public static void main(String[] args) {

        DBCConnection dbc;
        dbc = DBCConnection.getInstance();
        System.out.println(dbc);

        Thread thread1 = new Thread(() -> {
            DBCConnection dbc1 = DBCConnection.getInstance();
            System.out.println(dbc1);
        });

        Thread thread2 = new Thread(() -> {
            DBCConnection dbc2 = DBCConnection.getInstance();
            System.out.println(dbc2);
        });

        thread1.start();
        thread2.start();
    }
}
