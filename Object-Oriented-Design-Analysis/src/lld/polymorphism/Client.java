package lld.polymorphism;
import java.util.List;

public class Client {

    public static void main(String[] args) {

        // Only data-type of variable is accessible.
        User  u = new Student();
        u.setAge(22);
        int age = u.getAge();
        System.out.println(age);

        List<User> users = List.of(new Student(), new TA(), new Mentor(), new User());

        for(User user : users){
            ((Student)user).setPsp(12.00);
        }
    }
}
