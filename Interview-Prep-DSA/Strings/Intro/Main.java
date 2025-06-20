import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scn = new Scanner(System.in);
        String s = scn.nextLine();

        // System.out.println(s);
        // System.out.println(s.length());
        // System.out.println(s.charAt(2));

        for (int i = 0; i < s.length(); i++) {
            System.out.print(s.charAt(i) + " ");
        }
        System.out.println();

        // Won't work
        // s.charAt(0) = 'z';

        System.out.println("hello" + 10 + 20);
        System.out.println(10 + 20 + "hello");
        String[] parts = s.split(" ");

        for (String str : parts)
            System.out.print(str + " ");

        scn.close();
    }
}