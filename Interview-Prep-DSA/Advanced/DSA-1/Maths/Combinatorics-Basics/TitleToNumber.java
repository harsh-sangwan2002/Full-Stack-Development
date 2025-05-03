public class TitleToNumber {
    
    public int titleToNumber(String A) {

        int ans = 0, pow = 1;

        for (int i = A.length() - 1; i >= 0; i--) {

            char ch = A.charAt(i);
            ans = (int) (ch - 'A' + 1) * pow;
            pow *= 26;
        }

        return ans;
    }
}
