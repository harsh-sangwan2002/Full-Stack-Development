package Streams;

import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);

        // Q- Extract all the event numbers from the list and store them in a new list
        List<Integer> output = numbers.stream().filter(num->num%2==0).toList();
        System.out.println(output);
    }
}
