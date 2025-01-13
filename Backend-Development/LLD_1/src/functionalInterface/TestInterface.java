package functionalInterface;

@FunctionalInterface
public interface TestInterface {

    void fun();

    default void fun2(){
        System.out.println("fun2");
    }
}
