package StreamsLambdas.FunctionalInterface;

@FunctionalInterface
public interface TestInterface<T> {

    void fun(T t);

    default void fun2(){
        System.out.println("fun2");
    }
}
