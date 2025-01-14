package Concurrency02.MergeSortMultiThreaded;

import java.util.ArrayList;
import java.util.concurrent.*;
import java.util.List;

public class MergeSorter implements Callable<List<Integer>>{

    private List<Integer> listToSort;
    ExecutorService executorService;

    public MergeSorter(List<Integer> listToSort, ExecutorService executorService){
        this.listToSort = listToSort;
        this.executorService = executorService;
    }

    public List<Integer> call() throws Exception {
        int n = listToSort.size();

        if(n <= 1){
            return listToSort;
        }

        int mid = n/2;

        List<Integer> left = listToSort.subList(0, mid);
        List<Integer> right = listToSort.subList(mid, n);

        MergeSorter leftSorter = new MergeSorter(left,executorService);
        MergeSorter rightSorter = new MergeSorter(right,executorService);

        Future<List<Integer>> leftSortedListFuture = executorService.submit(leftSorter);
        Future<List<Integer>> rightSortedListFuture = executorService.submit(rightSorter);

        List<Integer> leftSortedList = leftSortedListFuture.get();
        List<Integer> rightSortedList = rightSortedListFuture.get();

        return getIntegers(leftSortedList, rightSortedList);
    }

    private static List<Integer> getIntegers(List<Integer> leftSortedList, List<Integer> rightSortedList) {
        int i = 0, j = 0;
        List<Integer> sortedList = new ArrayList<>();

        while(i < leftSortedList.size() && j < rightSortedList.size()){
            if(leftSortedList.get(i) < rightSortedList.get(j)){
                sortedList.add(leftSortedList.get(i));
                i++;
            }else{
                sortedList.add(rightSortedList.get(j));
                j++;
            }
        }

        while(i < leftSortedList.size()){
            sortedList.add(leftSortedList.get(i));
            i++;
        }

        while(j < rightSortedList.size()){
            sortedList.add(rightSortedList.get(j));
            j++;
        }
        return sortedList;
    }
}
