package Concurrency02.MergeSortMultiThreaded;

import java.util.ArrayList;
import java.util.concurrent.*;
import java.util.List;

public class MergeSorter implements Callable<List<Integer>>{

    private List<Integer> listToSort;
    private ExecutorService executorService;

    public MergeSorter(List<Integer> listToSort, ExecutorService executorService){
        this.listToSort = listToSort;
        this.executorService = executorService;
    }

    @Override
    public List<Integer> call() throws Exception{

        int n = this.listToSort.size();

        if(n<=1)
            return this.listToSort;

        int mid = n/2;
        List<Integer> leftHalf = new ArrayList<Integer>();
        List<Integer> rightHalf = new ArrayList<Integer>();

        for(int i=0; i<mid; i++)
            leftHalf.add(this.listToSort.get(i));

        for(int i=mid; i<n; i++)
            rightHalf.add(this.listToSort.get(i));

        MergeSorter leftMergeSorter = new MergeSorter(leftHalf,executorService);
        MergeSorter rightMergeSorter = new MergeSorter(rightHalf,executorService);

        Future<List<Integer>> leftSortedListFuture = executorService.submit(leftMergeSorter);
        Future<List<Integer>> rightSortedListFuture = executorService.submit(rightMergeSorter);

        List<Integer> leftSortedList = leftSortedListFuture.get();
        List<Integer> rightSortedList = rightSortedListFuture.get();

        return mergeSortedLists(leftSortedList, rightSortedList);
    }

    private List<Integer> mergeSortedLists(List<Integer> list1, List<Integer> l2){

        int i = 0, j = 0;
        List<Integer> res = new ArrayList<>();

        while(i<list1.size() && j<l2.size()){
            if(list1.get(i)<l2.get(j)){
                res.add(list1.get(i));
                i++;
            }else{
                res.add(l2.get(j));
                j++;
            }
        }

        while(i<list1.size()){
            res.add(list1.get(i));
            i++;
        }

        while(j<l2.size()){
            res.add(l2.get(j));
            j++;
        }

        return res;
    }
}
