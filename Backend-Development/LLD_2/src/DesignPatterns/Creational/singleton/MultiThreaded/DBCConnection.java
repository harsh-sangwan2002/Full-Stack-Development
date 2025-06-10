package DesignPatterns.Creational.singleton.MultiThreaded;

public class DBCConnection {

    private String username;
    private String password;
    private String url;
    // This will incrase the load time of the class
    static private DBCConnection dbc = new DBCConnection();

    private DBCConnection() {

    }

    public static DBCConnection getInstance() {

        return dbc;
    }
}
