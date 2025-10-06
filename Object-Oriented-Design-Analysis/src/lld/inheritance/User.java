package lld.inheritance;

public class User {

    double psp;
    private int userId;
    String name;
    int age;
    String gender;

    void changeName(String name){
        this.name = name;
        System.out.println(name+" is pausing the batch.");
    }

    void printUserId(){
        System.out.println(userId);
        printOK();
    }

    private void printOK(){
        System.out.println("Print ok");
    }
}
