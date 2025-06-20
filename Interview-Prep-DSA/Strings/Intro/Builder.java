public class Builder {

    public static void main(String[] args) {

        StringBuilder sb = new StringBuilder("hello");
        char ch = sb.charAt(2);
        System.out.println(ch); // Output: h

        sb.setCharAt(0, 'd');
        sb.insert(2, 'y');
        sb.deleteCharAt(2);
        System.out.println(sb);
    }
}
