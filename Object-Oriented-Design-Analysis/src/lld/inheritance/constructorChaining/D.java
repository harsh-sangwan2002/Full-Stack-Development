package lld.inheritance.constructorChaining;

public class D extends C{

    public D(){
        System.out.println("D");
    }

    public static void main(String[] args) {

        D d = new D();
    }
}
