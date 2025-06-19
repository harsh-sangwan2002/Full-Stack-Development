import java.util.ArrayList;
import java.util.Collections;

public class MergeOverlappingIntervals {

    public ArrayList<Interval> merge(ArrayList<Interval> intervals) {

        Collections.sort(intervals, (a, b) -> a.start - b.start);
        ArrayList<Interval> res = new ArrayList<>();
        Interval current = intervals.get(0);
        res.add(current);

        for (int i = 1; i < intervals.size(); i++) {

            Interval interval = intervals.get(i);

            if (interval.start <= current.end) {
                current.start = Math.min(current.start, interval.start);
                current.end = Math.max(current.end, interval.end);
            }

            else {
                res.add(interval);
                current = interval;
            }
        }

        return res;
    }
}
