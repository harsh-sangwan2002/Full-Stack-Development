package Exceptions;

public class Test {

    public static int test(){
        try{
            throw new Exception("Exception thrown");
        }catch (Exception e){
            System.out.println("Caught Exception");
            return 1;
        }finally {
            System.out.println("Finally block executed");
            return 2;
        }
    }
    public static void main(String[] args) {
        System.out.println(test());
    }
}
