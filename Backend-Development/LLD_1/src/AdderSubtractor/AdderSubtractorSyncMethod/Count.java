package AdderSubtractor.AdderSubtractorSyncMethod;

public class Count {

    private int value;

    public synchronized void addValue(int value){
        this.value+=value;
    }

    public int getValue(){
        return this.value;
    }
}
