package functionalInterface;

import java.util.function.BiPredicate;

public class Main {

    public static void main(String[] args) {

        // Can we create an object of an interface -->/ No

        // Way-1. Create a class which implements the interface
        BiPredicate<String, Integer> biPredicate = new BiPredicateImpl();
        System.out.println(biPredicate.test("Hello", 10));

        // Way-2. Anonymous class
        BiPredicate<String, Integer> biPredicate2 = new BiPredicate<String, Integer>() {
            @Override
            public boolean test(String str, Integer val) {
                return str.length() > val;
            }
        };
        System.out.println(biPredicate2.test("Hello", 10));

        // Way-3. Lambda expression (Java 8)
        BiPredicate<String, Integer> biPredicate3 = (str, val) -> str.length() > val;
        System.out.println(biPredicate3.test("Hello", 10));
    }
}
