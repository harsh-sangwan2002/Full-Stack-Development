package lld.inheritance;

public class Student extends User{

    double psp;
    String batch;

    void pauseBatch(){
        System.out.println("Batch paused.");
        this.batch = null;
    }
}
