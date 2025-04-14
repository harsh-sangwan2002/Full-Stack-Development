package FunctionalInterface;

import java.util.function.BiPredicate;

public class BiPredicateImpl implements BiPredicate<String, Integer> {

    @Override
    public boolean test(String str, Integer num){
        return str.length() > num;
    }
}
