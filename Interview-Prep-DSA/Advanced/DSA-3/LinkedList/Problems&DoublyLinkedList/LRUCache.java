import java.util.HashMap;

public class LRUCache {

    private class Node {
        int key;
        int value;
        Node prev, next;

        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    Node head, tail;
    int cap;
    HashMap<Integer, Node> map;

    public LRUCache(int capacity) {

        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.cap = capacity;
        map = new HashMap<>();
    }

    private void insert(Node node) {

        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
    }

    private void delete(Node node) {

        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    public int get(int key) {

        if (!map.containsKey(key))
            return -1;

        Node node = map.get(key);
        delete(node);
        insert(node);
        return node.value;
    }

    public void set(int key, int value) {

        if (map.containsKey(key)) {

            Node node = map.get(key);
            node.value = value;
            delete(node);
            insert(node);
        }

        else {

            if (map.size() == cap) {

                Node node = tail.prev;
                delete(node);
                map.remove(node.key);
            }

            Node node = new Node(key, value);
            insert(node);
            map.put(key, node);
        }
    }
}
