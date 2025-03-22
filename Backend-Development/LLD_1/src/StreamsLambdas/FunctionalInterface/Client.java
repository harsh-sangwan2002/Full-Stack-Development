package StreamsLambdas.FunctionalInterface;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Client {

    static class Car{

        String name;
        int price;
        int speed;

        public Car(String name, int price, int speed) {
            this.name = name;
            this.price = price;
            this.speed = speed;
        }

        @Override
        public String toString(){
            return "[Name = " + name + ", Price = " + price + ", Speed = " + speed + "]" + "\n";
        }
    }

    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        Collections.sort(numbers);
        System.out.println(numbers);

        Car car1 = new Car("BMW", 1000, 200);
        Car car2 = new Car("Audi", 1300, 400);
        Car car3 = new Car("Mercedes", 700, 150);
        Car car4 = new Car("Pagani", 400, 100);
        Car car5 = new Car("Rolls Royce", 1900, 500);
        Car car6 = new Car("Bugatti", 100, 50);

        List<Car> cars = Arrays.asList(car1, car2, car3, car4, car5, car6);
//        Comparator<Car> comparator = new Comparator<Car>() {
//            @Override
//            public int compare(Car c1, Car c2) {
//                    return c1.price - c2.price;
//            }
//        };

        Comparator<Car> comparator = (c1,c2)->c1.price - c2.price;
        cars.sort(comparator);
        System.out.println(cars);

        TestInterface<String> testInterface = (str)-> System.out.println(str);
        testInterface.fun("Hello");
    }
}
