package Exceptions;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {

        try{

            Scanner scn = new Scanner(System.in);
            int x = scn.nextInt();
            int y = scn.nextInt();

            int z = x/y;
            System.out.println(z);

            File file = new File("file.txt");
            FileReader fileReader = new FileReader(file);
            fileReader.read();

        }catch (ArithmeticException e){
            System.out.println("Got ArithmeticException");
        }catch (FileNotFoundException e){
            System.out.println("Got FileNotFoundException");
        }catch (IOException e){
            System.out.println("Got IOException");
        }catch (Exception e){
            System.out.println("Got General Exception");
        }finally{
            System.out.println("Inside Finally Block");
        }
    }
}
