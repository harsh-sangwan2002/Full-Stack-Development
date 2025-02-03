package Concurrency02.MergeSortMultiThreaded;

import java.util.concurrent.ExecutionException;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Main {

    public static void main(String[] args) throws ExecutionException, InterruptedException {

        List<Integer> listToSort = List.of(3,1,2,4,8,7,6,5);

        ExecutorService executorService = Executors.newCachedThreadPool();
        MergeSorter mergeSorter = new MergeSorter(listToSort,executorService);

        Future<List<Integer>> sortedListFuture = executorService.submit(mergeSorter);
        List<Integer> sortedList = sortedListFuture.get();

        System.out.println(sortedList);
    }
}
