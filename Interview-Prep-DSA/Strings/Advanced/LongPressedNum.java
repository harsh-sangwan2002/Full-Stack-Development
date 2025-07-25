public class LongPressedNum {

    private static boolean isLongPressedName(String name, String typed) {

        if (name.length() > typed.length()) {
            return false;
        }

        int i = 0, j = 0;

        while (i < name.length() && j < typed.length()) {

            if (name.charAt(i) == typed.charAt(j)) {
                i++;
                j++;
            }

            else if (i > 0 && name.charAt(i - 1) == typed.charAt(j))
                j++;

            else
                return false;
        }

        while (j < typed.length()) {
            if (typed.charAt(j) != name.charAt(i - 1)) {
                return false;
            }
            j++;
        }

        return i == name.length();
    }

    public static void main(String[] args) {

        String name = "mannu", typed = "mmaannu";
        boolean isLongPressed = isLongPressedName(name, typed);

        System.out.println(isLongPressed);
    }
}