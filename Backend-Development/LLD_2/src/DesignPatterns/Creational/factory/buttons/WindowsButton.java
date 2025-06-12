package DesignPatterns.Creational.factory.buttons;

public class WindowsButton implements Button{

    @Override
    public void click() {
        System.out.println("Windows Button clicked!");
    }
}
