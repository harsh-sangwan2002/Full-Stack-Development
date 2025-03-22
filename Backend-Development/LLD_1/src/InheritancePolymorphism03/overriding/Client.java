package InheritancePolymorphism03.overriding;

public class Client {

    public static void main(String[] args) {

        User user = new User();
        user.login("Scaler", "Gurugram");

        user = new Mentor();
        user.login("Scaler","Gurgaon");

        A a = new A();
        a.show();

        a = new B();
        a.show();

        a = new C();
        a.show();

        a = new D();
        a.show();
    }
}
