import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Queue;

public class UniqueLetter {

    public String solve(String A) {

        HashMap<Character, Integer> map = new HashMap<>();
        StringBuilder sb = new StringBuilder();
        Queue<Character> q = new ArrayDeque<>();

        for (char ch : A.toCharArray()) {

            q.add(ch);
            map.put(ch, map.getOrDefault(ch, 0) + 1);

            while (q.size() != 0 && map.get(q.peek()) > 1)
                q.remove();

            if (q.size() == 0)
                sb.append("#");

            else
                sb.append(q.peek());
        }

        return sb.toString();
    }
}
