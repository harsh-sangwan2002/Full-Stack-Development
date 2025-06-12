package DesignPatterns.Creational.factory.buttons;

public class iOSButton implements Button{

    @Override
    public void click() {
        System.out.println("iOS Button clicked");
    }
}
