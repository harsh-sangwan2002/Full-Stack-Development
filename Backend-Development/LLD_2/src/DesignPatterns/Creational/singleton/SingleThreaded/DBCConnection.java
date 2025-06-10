package DesignPatterns.Creational.singleton.SingleThreaded;

public class DBCConnection {

    static private DBCConnection dbc;

    private DBCConnection() {

    }

    public static DBCConnection getInstance() {

        if (dbc == null)
            return dbc = new DBCConnection();

        return dbc;
    }
}
