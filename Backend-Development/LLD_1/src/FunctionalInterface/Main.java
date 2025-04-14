package FunctionalInterface;

import java.util.function.BiPredicate;
import java.util.function.BinaryOperator;

public class Main {

    public static void main(String[] args) {

        // Way-1: Create a class that implements the functional interface
        BiPredicate<String, Integer> biPredicate = new BiPredicateImpl();
        System.out.println(biPredicate.test("Hello", 3)); // true

        // Way-2: Using anonymous class
        BiPredicate<String, Integer> anonymousBiPredicate = new BiPredicate<String, Integer>() {
            @Override
            public boolean test(String str, Integer num) {
                return str.length() > num;
            }
        };
        System.out.println(anonymousBiPredicate.test("Hello", 3)); // true

        // Way-3: Using lambda expression
        BiPredicate<String, Integer> lambdaBiPredicate = (str, num) -> str.length() > num;
        System.out.println(lambdaBiPredicate.test("Hello", 3)); // true

        BinaryOperator<String> binaryOperator = (str1, str2) -> str1 + str2;
        System.out.println(binaryOperator.apply("Hello", " World")); // Hello World
    }
}
