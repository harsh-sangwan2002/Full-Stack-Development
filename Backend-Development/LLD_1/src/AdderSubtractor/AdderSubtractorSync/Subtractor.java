package AdderSubtractor.AdderSubtractorSync;

public class Subtractor implements Runnable{

    Count count;

    public Subtractor(Count count) {
        this.count = count;
    }

    @Override
    public void run(){
        synchronized (count){
            for(int i=1; i<=100; i++){
                count.value -= i;
            }
        }
    }
}
