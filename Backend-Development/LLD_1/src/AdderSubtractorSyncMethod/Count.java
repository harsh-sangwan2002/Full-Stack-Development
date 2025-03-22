package AdderSubtractorSyncMethod;

public class Count {

    int value;

    public synchronized void addValue(int value){
        this.value+=value;
    }

    public int getValue(){
        return this.value;
    }
}
