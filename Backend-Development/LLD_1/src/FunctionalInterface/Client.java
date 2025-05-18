package FunctionalInterface;

import java.util.*;

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
            return "Car{" +
                    "name='" + name + '\'' +
                    ", price=" + price +
                    ", speed=" + speed +
                    '}';
        }
    }

    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(4, 3,2,1,5,10,15);
        Collections.sort(list);
        System.out.println(list);

        Car car1 = new Car("BMW", 10000, 200);
        Car car2 = new Car("Mercedes", 20000, 300);
        Car car3 = new Car("Audi", 15000, 250);
        Car car4 = new Car("Toyota", 5000, 150);
        List<Car> cars = Arrays.asList(car1, car2, car3, car4);

        Comparator<Car> comparator = new Comparator<Car>() {
            @Override
            public int compare(Car c1, Car c2) {
                return c1.speed - c2.speed;
            }
        };

        Comparator<Car> comparator2 = (c1, c2) -> c1.speed - c2.speed;
        cars.sort(comparator2);
        System.out.println(cars);

        // Filter out expensive cars
        List<Car> expensiveCars = cars.stream().filter(c -> c.price > 5000).toList();
        System.out.println(expensiveCars);

        // For every car, return the price
        System.out.println(cars.stream().map(c->c.price).toList());
    }
}
