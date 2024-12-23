import java.util.ArrayList;

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

public class MergeIntervals {
    
    public ArrayList<Interval> insert(ArrayList<Interval> intervals, Interval newInterval) {

        ArrayList<Interval> res = new ArrayList<>();
        int idx = 0;

        while (idx < intervals.size() && intervals.get(idx).end < newInterval.start)
            res.add(intervals.get(idx++));

        while (idx < intervals.size() && intervals.get(idx).start <= newInterval.end) {
            newInterval.start = Math.min(intervals.get(idx).start, newInterval.start);
            newInterval.end = Math.max(intervals.get(idx).end, newInterval.end);
            idx++;
        }
        res.add(newInterval);

        while (idx < intervals.size())
            res.add(intervals.get(idx++));

        return res;
    }
}
