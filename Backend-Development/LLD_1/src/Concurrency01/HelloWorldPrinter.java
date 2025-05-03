package Concurrency01;

public class HelloWorldPrinter implements Runnable{

    @Override
    public void run(){
        System.out.println("Inside HelloWorldPrinter class.");
        System.out.println("Hello World: Thread name = "+Thread.currentThread().getName());
    }
}
