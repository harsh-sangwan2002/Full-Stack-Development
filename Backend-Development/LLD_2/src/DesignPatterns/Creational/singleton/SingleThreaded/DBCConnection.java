package DesignPatterns.Creational.singleton.SingleThreaded;

public class DBCConnection {

    private String username;
    private String password;
    private String url;
    static private DBCConnection dbc;

    private DBCConnection() {

    }

    public static DBCConnection getInstance() {

        if (dbc == null)
            return dbc = new DBCConnection();

        return dbc;
    }
}
