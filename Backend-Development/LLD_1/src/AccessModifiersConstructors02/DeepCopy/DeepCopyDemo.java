package AccessModifiersConstructors02.DeepCopy;

class Address implements Cloneable {
    String city;
    String state;

    public Address(String city, String state) {
        this.city = city;
        this.state = state;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // shallow copy of Address, but it’s okay as it has only primitives
    }

    @Override
    public String toString() {
        return city + ", " + state;
    }
}

class Person implements Cloneable {
    String name;
    int age;
    Address address;

    public Person(String name, int age, Address address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Deep Copy
    @Override
    protected Object clone() throws CloneNotSupportedException {
        Person cloned = (Person) super.clone();
        cloned.address = (Address) address.clone(); // deep copy of address
        return cloned;
    }

    @Override
    public String toString() {
        return name + " (" + age + ") - " + address;
    }
}

public class DeepCopyDemo {
    public static void main(String[] args) {
        try {
            Address address = new Address("Delhi", "Delhi");
            Person person1 = new Person("Aman", 25, address);

            // Deep copy
            Person person2 = (Person) person1.clone();

            // Modify person2's address
            person2.address.city = "Mumbai";

            System.out.println("Original Person: " + person1);
            System.out.println("Cloned Person  : " + person2);
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
    }
}

