package InheritancePolymorphism03.polymorphism.overriding;

class Parent{
    void print(){
        System.out.println("Parent says print...");
    }
}

class Child1 extends Parent{
    void print(){
        System.out.println("Child1 says print...");
    }
}

class Child2 extends Parent{
    void print(){
        System.out.println("Child2 says print....");
    }
}

public class Main {

    public static void main(String[] args) {

        Parent p = new Parent();
        p.print();

        p = new Child1();
        p.print();

        p = new Child2();
        p.print();
    }
}
