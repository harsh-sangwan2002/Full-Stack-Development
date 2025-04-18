package AccessModifiersConstructors02;

public class Test {

    public static int test(){

        try{
            throw new Exception("Exception thrown");
        }catch (Exception e){
            System.out.println("Caught Exception");
            return 2;
        }finally {
            System.out.println("Finally executed");
            return 3;
        }
    }

    public static void main(String[] args) {

        System.out.println(test());
    }
}
