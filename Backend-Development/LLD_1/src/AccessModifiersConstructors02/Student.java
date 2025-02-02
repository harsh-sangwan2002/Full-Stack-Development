package AccessModifiersConstructors02;

public class Student {

    public String name;
    private int age;
    private String email;
    String batchName;
    private double psp;

    Student(String name, int age, String email){
        System.out.println("DEBUG");
        this.name = name;
        this.age = age;
        this.email = email;
        this.batchName = "Java";
        this.psp = 100.0;
    }

    Student(String name){
        this.name = name;
    }

    Student(Student st){
        this.name = st.name;
        this.age = st.age;
        this.email = st.email;
        this.batchName = st.batchName;
        this.psp = st.psp;
    }
}
