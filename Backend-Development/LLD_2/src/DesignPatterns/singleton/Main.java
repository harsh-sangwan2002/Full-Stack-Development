package DesignPatterns.singleton;

public class Main {

    public static void main(String[] args) {

        DBC dbc1 = DBC.getInstance();
        DBC dbc2 = DBC.getInstance();
        DBC dbc3 = DBC.getInstance();

        System.out.println(dbc1);
        System.out.println(dbc2);
        System.out.println(dbc3);
    }
}
