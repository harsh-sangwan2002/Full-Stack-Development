package DesignPatterns.Creational.prototype;

public class Client {

    public static void fillRegistry(StudentRegistry studentRegistry) {
        Student mar24LLDEvePrototype = new Student();
        mar24LLDEvePrototype.setName("Alice");
        mar24LLDEvePrototype.setAge(20);
        mar24LLDEvePrototype.setBatch("Batch A");
        mar24LLDEvePrototype.setPsp(85.5);
        mar24LLDEvePrototype.setAvgBatchPsp(80.0);

        Student mar24LLDMorPrototype = new Student();
        mar24LLDMorPrototype.setName("Bob");
        mar24LLDMorPrototype.setAge(22);
        mar24LLDMorPrototype.setBatch("Batch B");
        mar24LLDMorPrototype.setPsp(90.0);
        mar24LLDMorPrototype.setAvgBatchPsp(88.0);

        studentRegistry.registerStudent("mar24LLDEvePrototype", mar24LLDEvePrototype);
        studentRegistry.registerStudent("mar24LLDMorPrototype", mar24LLDMorPrototype);

        IntelligentStudent mar24LLDEvesPrototype = new IntelligentStudent();
        mar24LLDEvesPrototype.setBatch("mar24LLDEvesPrototype");
        mar24LLDEvesPrototype.setName("Charlie");
        mar24LLDEvesPrototype.setAge(19);
        mar24LLDEvesPrototype.setPsp(95.0);
        mar24LLDEvesPrototype.setAvgBatchPsp(92.0);
        mar24LLDEvesPrototype.setIq(120);
        studentRegistry.registerStudent("mar24LLDEvesPrototype", mar24LLDEvesPrototype);
    }

    public static void main(String[] args) {

        StudentRegistry studentRegistry = new StudentRegistry();
        fillRegistry(studentRegistry);

        Student shivam = studentRegistry.get("mar24LLDEvePrototype").clone();
        shivam.setName("Shivam");
        shivam.setAge(21);
        shivam.setBatch("Batch C");
        shivam.setPsp(92.0);
        shivam.setAvgBatchPsp(89.0);
        System.out.println(shivam);

        Student adhijeetISStudent = studentRegistry.get("mar24LLDEvesPrototype").clone();
        System.out.println(adhijeetISStudent);
    }
}
