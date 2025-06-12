package DesignPatterns.Creational.factory.buttons;

public class AndroidButton implements Button{

    @Override
    public void click() {
        System.out.println("Android Button clicked");
    }
}
