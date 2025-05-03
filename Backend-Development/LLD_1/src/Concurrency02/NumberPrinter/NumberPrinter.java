package Concurrency02.NumberPrinter;

public class NumberPrinter implements  Runnable{

    private final int numberToPrint;

    NumberPrinter(int numberToPrint){
        this.numberToPrint = numberToPrint;
    }

    @Override
    public void run(){
        System.out.println(numberToPrint+" -Printed by "+Thread.currentThread().getName());
    }
}
