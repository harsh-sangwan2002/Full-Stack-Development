package Concurrency02.Executors;

public class NumberPrinter implements Runnable{

    int numberToPrint;

    public NumberPrinter(int numberToPrint){
        this.numberToPrint = numberToPrint;
    }

    public void run(){
        System.out.println(numberToPrint+" -Printed by "+Thread.currentThread().getName());
    }
}
