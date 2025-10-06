package lld.introToOOPS;

public class Student {
    String name;
    String batch;
    String gender;
    int age;
    double psp;

    void changeBatch(String newBatch){
        this.batch = newBatch;
    }

    void applyForJob(int jobId){

        if(this.psp<80){
            System.out.println("Fail");
        }

        else{
            System.out.println("Success");
        }
    }
}
