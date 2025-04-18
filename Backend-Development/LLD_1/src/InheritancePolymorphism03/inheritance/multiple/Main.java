package InheritancePolymorphism03.inheritance.multiple;

public class Main implements Character, Weapon{

    public void attack(){
        System.out.println("Attack");
    }

    public static void main(String[] args) {

        Main main = new Main();
        main.attack();
    }
}
