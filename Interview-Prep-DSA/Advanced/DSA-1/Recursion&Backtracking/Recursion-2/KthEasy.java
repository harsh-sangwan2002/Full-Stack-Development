import java.util.ArrayList;
import java.util.List;

public class KthEasy {

    public int solve(int A, int B) {

        List<String> list = new ArrayList<>();
        list.add("0");
        list.add("01");

        for (int i = 2; i < A; i++) {

            String str = list.get(list.size() - 1);
            String temp = "";

            for (int j = 0; j < str.length(); j++) {

                if (str.charAt(j) == '0')
                    temp += "01";

                else
                    temp += "10";
            }

            list.add(temp);
        }

        String val = list.get(A - 1).charAt(B) + "";
        return Integer.parseInt(val);
    }
}
