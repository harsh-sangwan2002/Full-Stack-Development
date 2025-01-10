public class ConvertToTitle {
    
    public String convertToTitle(int A) {

        String str = "";

        while (A != 0) {

            int rem = (A - 1) % 26;
            A = (A - 1) / 26;
            str = ((char) ('A' + rem)) + str;
        }

        return str;
    }
}
