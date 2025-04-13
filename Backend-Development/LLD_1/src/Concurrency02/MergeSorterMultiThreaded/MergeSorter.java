package Concurrency02.MergeSorterMultiThreaded;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.*;

public class MergeSorter implements Callable<List<Integer>> {

    List<Integer> listToSort;
    ExecutorService executorService;

    public MergeSorter(List<Integer> listToSort, ExecutorService executorService) {
        this.listToSort = listToSort;
        this.executorService = executorService;
    }

    @Override
    public List<Integer> call () throws Exception {
        // Merge Sort logic implementation will happen here
        int n = listToSort.size();
        if(n<=1)
            return listToSort;

        List<Integer> leftHalf = new ArrayList<>();
        List<Integer> rightHalf = new ArrayList<>();

        for(int i=0; i<n/2; i++) {
            leftHalf.add(listToSort.get(i));
        }

        for(int i=n/2; i<n; i++) {
            rightHalf.add(listToSort.get(i));
        }

        MergeSorter leftMergeSorter = new MergeSorter(leftHalf, executorService);
        MergeSorter rightMergeSorter = new MergeSorter(rightHalf, executorService);

        Future<List<Integer>> leftSortedFuture = executorService.submit(leftMergeSorter);
        Future<List<Integer>> rightSortedFuture = executorService.submit(rightMergeSorter);

        List<Integer> leftSorted = leftSortedFuture.get();
        List<Integer> rightSorted = rightSortedFuture.get();

        return  mergeSortedLists(leftSorted, rightSorted);
    }

    public List<Integer> mergeSortedLists(List<Integer> left, List<Integer> right){

        List<Integer> mergedList = new ArrayList<>();
        int i=0, j=0;

        while(i<left.size() && j<right.size()){
            if(left.get(i) < right.get(j)){
                mergedList.add(left.get(i));
                i++;
            } else {
                mergedList.add(right.get(j));
                j++;
            }
        }

        while(i<left.size()){
            mergedList.add(left.get(i));
            i++;
        }

        while(j<right.size()){
            mergedList.add(right.get(j));
            j++;
        }

        return mergedList;
    }
}
