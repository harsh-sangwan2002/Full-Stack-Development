package ExceptionHandling;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class Client {

    public static void main(String[] args) {

        try {
            Scanner scn = new Scanner(System.in);
            int x = scn.nextInt();
            int y = scn.nextInt();

            System.out.println(x/y);

            File file = new File("fileName");
            FileReader fileReader = new FileReader(file);
            fileReader.read();
        }
        catch(ArithmeticException e){
            System.out.println("Got arithmetic exception");
        }
        catch (FileNotFoundException e){
            System.out.println("Got FileNotFound exception");
        }
        catch (IOException e) {
            System.out.println("Got IOException");
        }
        catch (Exception e){
            System.out.println("Got general exception");
        }
    }
}
