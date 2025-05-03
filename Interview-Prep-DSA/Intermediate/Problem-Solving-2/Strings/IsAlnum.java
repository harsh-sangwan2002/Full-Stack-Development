public class IsAlnum {

    public int solve(char[] A) {

        for (char ch : A) {

            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'))
                continue;

            else
                return 0;
        }

        return 1;
    }
}
