public class LongestCommonPrefix {

    public String longestCommonPrefix(String[] A) {

        if (A.length == 0)
            return "";

        String prefix = A[0];

        for (int i = 0; i < A.length; i++) {

            while (A[i].indexOf(prefix) != 0)
                prefix = prefix.substring(0, prefix.length() - 1);

            if (prefix == "")
                return "";
        }

        return prefix;
    }
}
