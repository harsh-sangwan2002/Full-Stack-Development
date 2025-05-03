package ExceptionHandling;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void readFileContent(String fileName) throws IOException {
        File file = new File(fileName);
        FileReader fileReader = new FileReader(file);
        fileReader.read();
    }

    public static void main(String[] args) throws IOException {

        Scanner scn = new Scanner(System.in);
        int x = scn.nextInt();
        int y = scn.nextInt();

        System.out.println(x/y);
        System.out.println("After division");

        readFileContent("abc.txt");
    }
}
