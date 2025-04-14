package Streams;

import java.util.Arrays;
import java.util.List;

public class Client {

    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(5,2,1,4,6,8,10);

        // Using Streams to filter the even numbers
        List<Integer> evenNumbers = list.stream().filter(n->n%2==0).toList();
        System.out.println(evenNumbers);
    }
}
