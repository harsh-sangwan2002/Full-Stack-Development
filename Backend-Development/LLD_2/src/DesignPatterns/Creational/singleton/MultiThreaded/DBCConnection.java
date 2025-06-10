package DesignPatterns.Creational.singleton.MultiThreaded;

public class DBCConnection {

    // This will incrase the load time of the class
    static private DBCConnection dbc = new DBCConnection();

    private DBCConnection() {

    }

    public static DBCConnection getInstance() {

        return dbc;
    }
}
