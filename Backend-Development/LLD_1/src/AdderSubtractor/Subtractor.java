package AdderSubtractor;

public class Subtractor implements  Runnable{

    Count count;

    public Subtractor(Count count){
        this.count = count;
    }

    @Override
    public void run(){

        for(int i=0; i<100; i++){
            count.value -= i;
        }
    }
}
