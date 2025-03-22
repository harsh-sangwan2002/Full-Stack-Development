package StreamsLambdas.FunctionalInterface;

import java.util.function.BiPredicate;

public class BiPredicateImpl implements BiPredicate<String,Integer> {

    @Override
    public boolean test(String str, Integer val) {
        return str.length() > val;
    }
}
