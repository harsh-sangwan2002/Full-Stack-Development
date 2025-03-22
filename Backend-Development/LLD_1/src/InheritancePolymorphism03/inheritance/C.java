package InheritancePolymorphism03.inheritance;

public class C extends B {

    int phone;

    C(){
        System.out.println("C's constructor");
    }

    C(int phone){
        super(21);
        System.out.println("C's constructor with parameter");
    }
}
