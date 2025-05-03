package Collections;

import java.util.LinkedList;

public class MyHashMap {

    static class HashMap<K, V> {

        private static class HMNode<K, V> {
            K key;
            V value;

            public HMNode(K key, V value) {
                this.key = key;
                this.value = value;
            }
        }

        private LinkedList<HMNode<K, V>>[] buckets;
        private int size;

        @SuppressWarnings("unchecked")
        public HashMap() {
            buckets = (LinkedList<HMNode<K, V>>[]) new LinkedList[4];

            for (int i = 0; i < buckets.length; i++)
                buckets[i] = new LinkedList<>();

            size = 0;
        }

        private int hashFn(K key) {
            return Math.abs(key.hashCode()) % buckets.length;
        }

        private HMNode<K, V> findNodeIdx(LinkedList<HMNode<K, V>> list, K key) {
            for (HMNode<K, V> node : list) {
                if (node.key.equals(key))
                    return node;
            }
            return null;
        }

        @SuppressWarnings("unchecked")
        private void rehash() {
            LinkedList<HMNode<K, V>>[] oldBuckets = buckets;
            buckets = (LinkedList<HMNode<K, V>>[]) new LinkedList[oldBuckets.length * 2];

            for (int i = 0; i < buckets.length; i++)
                buckets[i] = new LinkedList<>();

            size = 0;

            for (LinkedList<HMNode<K, V>> oldBucket : oldBuckets) {
                for (HMNode<K, V> curr : oldBucket)
                    this.put(curr.key, curr.value);
            }
        }

        public void put(K key, V value) {
            int bucketNo = hashFn(key);
            HMNode<K, V> node = findNodeIdx(buckets[bucketNo], key);

            if (node != null) {
                node.value = value;
            } else {
                HMNode<K, V> newNode = new HMNode<>(key, value);
                buckets[bucketNo].addLast(newNode);
                this.size++;
            }

            double lambda = this.size * 1.0 / buckets.length;
            if (lambda > 2.0)
                rehash();
        }

        public V get(K key) {
            int bucketNo = hashFn(key);
            HMNode<K, V> node = findNodeIdx(buckets[bucketNo], key);
            return node == null ? null : node.value;
        }

        public V remove(K key) {
            int bucketNo = hashFn(key);
            LinkedList<HMNode<K, V>> bucket = buckets[bucketNo];

            for (int i = 0; i < bucket.size(); i++) {
                HMNode<K, V> node = bucket.get(i);
                if (node.key.equals(key)) {
                    bucket.remove(i);
                    size--;
                    return node.value;
                }
            }

            return null;
        }

        public boolean containsKey(K key) {
            int bucketNo = hashFn(key);
            HMNode<K, V> node = findNodeIdx(buckets[bucketNo], key);
            return node != null;
        }

        public int size() {
            return this.size;
        }

        @Override
        public String toString() {
            StringBuilder sb = new StringBuilder("[ ");

            for (LinkedList<HMNode<K, V>> list : buckets) {
                for (HMNode<K, V> node : list) {
                    sb.append(node.key).append(": ").append(node.value).append(", ");
                }
            }

            if (sb.length() > 2)
                sb.setLength(sb.length() - 2); // Remove trailing comma and space

            sb.append(" ]");
            return sb.toString();
        }
    }

    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("India", 1);
        map.put("USA", 2);
        map.put("Pakistan", 3);
        map.put("Norway", 4);

        System.out.println("Get India: " + map.get("India"));
        System.out.println("Get UK: " + map.get("UK"));
        System.out.println("Contains Pakistan: " + map.containsKey("Pakistan"));
        System.out.println("Contains England: " + map.containsKey("England"));
        System.out.println("Size: " + map.size());

        System.out.println("Remove Pakistan: " + map.remove("Pakistan"));
        System.out.println("After removal: " + map);
    }
}
