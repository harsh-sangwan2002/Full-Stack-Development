package InheritancePolymorphism03.inheritance;

public class B extends A {

    int age;

    B(){
        System.out.println("B's constructor");
    }

    B(int age){
        System.out.println("B's constructor with parameter");
    }
}
