import java.util.ArrayList;
import java.util.Collections;

// Definition for an interval.
class Interval {
    int start;
    int end;

    Interval() {
        start = 0;
        end = 0;
    }

    Interval(int s, int e) {
        start = s;
        end = e;
    }
}

public class MergeOverlappingIntervals {

    public ArrayList<Interval> merge(ArrayList<Interval> intervals) {

        Collections.sort(intervals, (a, b) -> a.start - b.start);

        ArrayList<Interval> res = new ArrayList<>();

        Interval curr = intervals.get(0);
        res.add(curr);

        for (int i = 1; i < intervals.size(); i++) {

            Interval interval = intervals.get(i);

            if (interval.start <= curr.end) {
                curr.start = Math.min(curr.start, interval.start);
                curr.end = Math.max(curr.end, interval.end);
            }

            else {
                res.add(interval);
                curr = interval;
            }
        }

        return res;
    }
}