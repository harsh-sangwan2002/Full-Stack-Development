package accessModifiersConstrcutors;

public class Main  {

    public static void main(String[] args) {

        Student stu1 = new Student("Harsh",21,"Sept24");
        Student stu2 = new Student("Harsh");
        Student stu3 = new Student(stu1);

        System.out.println("DEBUG");
    }
}