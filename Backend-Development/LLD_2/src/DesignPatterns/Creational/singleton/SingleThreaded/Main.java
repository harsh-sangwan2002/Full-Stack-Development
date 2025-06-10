package DesignPatterns.Creational.singleton.SingleThreaded;

public class Main {

    public static void main(String[] args) {

        DBCConnection dbc;
        dbc = DBCConnection.getInstance();
        System.out.println(dbc);
    }
}
