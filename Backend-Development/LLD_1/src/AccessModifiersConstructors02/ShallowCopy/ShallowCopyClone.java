package AccessModifiersConstructors02.ShallowCopy;

class Address{
    String city;
    String state;

    public Address(){

    }

    public Address(String city, String state){
        this.city = city;
        this.state = state;
    }

    @Override
    public String toString(){
        return city + ", " + state;
    }
}

class Person implements Cloneable{

    String name;
    int age;
    Address address;

    public Person(){

    }

    public Person(String name, int age, Address address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException{
        return super.clone();
    }

    @Override
    public String toString(){
        return name + " (" + age + ") " + address;
    }
}

public class ShallowCopyClone {

    public static void main(String[] args) {

        Address address = new Address("Mumbai","Maharashtra");
        Person person1 = new Person("Harsh",22,address);
        Person person2 = new Person("Vinay",23,address);

        person2.address.city = "Bhopal";
        System.out.println(person1);
        System.out.println(person2);
    }
}
