package Generics;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void doSomething(List<? extends Animal> animals){
        for(Animal animal : animals){
            System.out.print(animal.name+", ");
        }
    }
    public static void main(String[] args) {

//        Pair p = new Pair();
//        p.first = "Scaler";
//        p.second = 3.41;
//        System.out.println(p.first);
//        System.out.println(p.second);

        Pair<String, Integer> pair = new Pair<>();
        pair.first = "India";
        pair.second = 140;
//        System.out.println(pair.first);
//        System.out.println(pair.second);

        String country = pair.first;
//        System.out.println(country);

        Pair<Double,Double> pair1 = new Pair<>();
        pair1.first = 1.23;
        pair1.second = 2.34;
//        System.out.println(pair1.first);
//        System.out.println(pair1.second);

        List<Animal> animals = new ArrayList<>();
        animals.add(new Animal("Cat"));
        animals.add(new Animal("Dog"));

        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog("Bulldog"));
        dogs.add(new Dog("Golden Retriever"));

        List<? extends Animal> animals1 = new ArrayList<Dog>();

        doSomething(animals);
        System.out.println();
        doSomething(dogs);
    }
}
