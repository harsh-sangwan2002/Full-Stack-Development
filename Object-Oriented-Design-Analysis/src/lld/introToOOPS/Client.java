package lld.introToOOPS;

public class Client {

    public static void main(String[] args) {

        Student st1 = new Student();
        st1.name = "Vinay";
        st1.batch = "May2024";


        Student st2 = new Student();
        st2.name = "Harsh";
        st2.batch = "May2024";
        st2.psp = 92.02;
        st2.applyForJob(123);
        st2.applyForJob(1234);
    }
}
