package DesignPatterns.prototype;

public class Client {

    public static void fillRegistry(StudentRegistry studentRegistry){

        Student mar24EveLLDPrototype = new Student();
        mar24EveLLDPrototype.setBatch("Mar24EveLLD");
        mar24EveLLDPrototype.setAvgBatchPsp(80.0);
        studentRegistry.register("mar24EveLLD",mar24EveLLDPrototype);

        Student feb24EveLLDPrototype = new Student();
        feb24EveLLDPrototype.setBatch("Mar24EveLLD");
        feb24EveLLDPrototype.setAvgBatchPsp(80.0);
        studentRegistry.register("feb24EveLLD",feb24EveLLDPrototype);
    }

    public static void main(String[] args) {

        StudentRegistry studentRegistry = new StudentRegistry();
        fillRegistry(studentRegistry);

        Student shivam = studentRegistry.get("mar24EveLLD").clone();
        shivam.setAge(22);
        shivam.setName("Shivam");
        shivam.setPsp(90.9);

        System.out.println("DEBUG");
    }
}
