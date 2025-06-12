package DesignPatterns.Creational.singleton.MultiThreaded;

public class DBCConnection {

    // This will increase the load time of the class
    static private final DBCConnection dbc = new DBCConnection();

    private DBCConnection() {

    }

    public static DBCConnection getInstance() {

        return dbc;
    }
}
