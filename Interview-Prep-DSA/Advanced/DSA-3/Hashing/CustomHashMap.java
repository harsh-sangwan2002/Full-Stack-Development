import java.util.LinkedList;

@SuppressWarnings("unchecked")
public class CustomHashMap<K, V> {

    // Define the initial capacity of the HashMap
    private static final int INITIAL_CAPACITY = 16;
    private LinkedList<Node<K, V>>[] buckets;
    private int size;

    // Constructor to initialize the buckets
    public CustomHashMap() {
        buckets = new LinkedList[INITIAL_CAPACITY];
        size = 0;
    }

    // Method to calculate the hash code and bucket index
    private int getBucketIndex(K key) {
        return key == null ? 0 : Math.abs(key.hashCode() % buckets.length);
    }

    // Method to put a key-value pair in the HashMap
    public void put(K key, V value) {
        int index = getBucketIndex(key);
        if (buckets[index] == null) {
            buckets[index] = new LinkedList<>();
        }

        // Check if the key already exists in the bucket
        for (Node<K, V> node : buckets[index]) {
            if (node.key.equals(key)) {
                node.value = value; // Update the value
                return;
            }
        }

        // If key is not found, add a new node
        buckets[index].add(new Node<>(key, value));
        size++;
    }

    // Method to get a value by key
    public V get(K key) {
        int index = getBucketIndex(key);
        if (buckets[index] == null) {
            return null;
        }

        // Iterate through the bucket to find the key
        for (Node<K, V> node : buckets[index]) {
            if (node.key.equals(key)) {
                return node.value;
            }
        }

        return null; // Key not found
    }

    // Method to remove a key-value pair
    public V remove(K key) {
        int index = getBucketIndex(key);
        if (buckets[index] == null) {
            return null;
        }

        // Iterate through the bucket to find the key
        for (Node<K, V> node : buckets[index]) {
            if (node.key.equals(key)) {
                V value = node.value;
                buckets[index].remove(node);
                size--;
                return value;
            }
        }

        return null; // Key not found
    }

    // Method to get the current size of the HashMap
    public int size() {
        return size;
    }

    // Check if the HashMap is empty
    public boolean isEmpty() {
        return size == 0;
    }

    // Node class to represent a key-value pair
    private static class Node<K, V> {
        K key;
        V value;

        Node(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }

    public static void main(String[] args) {
        
        CustomHashMap<String, Integer> map = new CustomHashMap<>();
        map.put("One", 1);
        map.put("Two", 2);
        map.put("Three", 3);

        System.out.println("Value for 'One': " + map.get("One")); // Output: 1
        System.out.println("Value for 'Two': " + map.get("Two")); // Output: 2

        map.remove("Two");
        System.out.println("Value for 'Two' after removal: " + map.get("Two")); // Output: null

        System.out.println("Size of map: " + map.size()); // Output: 2
    }
}
