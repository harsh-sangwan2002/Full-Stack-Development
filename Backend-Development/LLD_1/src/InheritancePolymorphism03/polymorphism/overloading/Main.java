package InheritancePolymorphism03.polymorphism.overloading;

public class Main {

    public static void print(String name){
        System.out.println("Printing a string: "+name);
    }

    public static void print(int x){
        System.out.println("Printing an integer: "+x);
    }

    public static void main(String[] args) {

        print("1");
        print(1);
    }
}
