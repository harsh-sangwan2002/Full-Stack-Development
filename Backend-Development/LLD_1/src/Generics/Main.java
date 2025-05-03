package Generics;

import java.util.ArrayList;
import java.util.List;

public class Main {

    static void doSomething(List<? extends Animal> animals){
        System.out.println("Do something function");
    }

    public static void main(String[] args) {

//        Pair p = new Pair();
//        p.first = "Scaler";
//        p.second = 100;
//
//        String city = (String)p.second;
//        System.out.println(city);

        Pair<String,Integer> pair = new Pair();
        pair.first = "India";
        pair.second = 140;

        String country = pair.first;
        System.out.println(country);

        Pair<Double,Double> pair2 = new Pair();

        List<Animal> animals = new ArrayList<>();
        List<Dog> dogs = new ArrayList<>();

        doSomething(animals);
        doSomething(dogs);
    }
}
