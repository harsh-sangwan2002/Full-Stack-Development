package concurrency01IntroToProcesses;

public class HelloWorldPrinter implements Runnable{

    @Override
    public void run(){
        System.out.println("Hello World: Thread name = "+Thread.currentThread().getName());
    }
}
