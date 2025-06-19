import java.util.ArrayList;

public class MergeIntervals {

    public ArrayList<Interval> insert(ArrayList<Interval> intervals, Interval newInterval) {

        ArrayList<Interval> res = new ArrayList<>();
        int idx = 0;

        while (idx < intervals.size() && intervals.get(idx).end < newInterval.start)
            res.add(intervals.get(idx++));

        while (idx < intervals.size() && intervals.get(idx).start <= newInterval.end) {
            newInterval.start = Math.min(newInterval.start, intervals.get(idx).start);
            newInterval.end = Math.max(newInterval.end, intervals.get(idx).end);
            idx++;
        }
        res.add(newInterval);

        while (idx < intervals.size())
            res.add(intervals.get(idx++));

        return res;
    }
}
