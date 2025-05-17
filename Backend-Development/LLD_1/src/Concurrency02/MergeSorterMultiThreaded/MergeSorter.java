package Concurrency02.MergeSorterMultiThreaded;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.*;

public class MergeSorter implements Callable<List<Integer>> {

    List<Integer> listToSort;
    ExecutorService executorService;

    public MergeSorter(List<Integer> listToSort, ExecutorService executorService){
        this.listToSort = listToSort;
        this.executorService = executorService;
    }

    @Override
    public List<Integer> call() throws Exception{
        if(listToSort.size() <= 1){
            return listToSort;
        }

        List<Integer> leftHalf = new ArrayList<>();
        List<Integer> rightHalf = new ArrayList<>();

        for(int i=0; i<listToSort.size()/2; i++){
            leftHalf.add(listToSort.get(i));
        }

        for(int i=listToSort.size()/2; i<listToSort.size(); i++){
            rightHalf.add(listToSort.get(i));
        }

        Future<List<Integer>> leftFuture = executorService.submit(new MergeSorter(leftHalf, executorService));
        Future<List<Integer>> rightFuture = executorService.submit(new MergeSorter(rightHalf, executorService));

        leftHalf = leftFuture.get();
        rightHalf = rightFuture.get();
        return mergeSortedLists(leftHalf, rightHalf);
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
