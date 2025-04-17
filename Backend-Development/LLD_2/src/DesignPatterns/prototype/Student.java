package DesignPatterns.prototype;

public class Student implements Prototype<Student>{

    String name;
    int age;
    String batch;
    double avgBatchPsp;
    double psp;

    public Student(){

    }

    public Student(Student student){
        this.name = student.name;
        this.age = student.age;
        this.batch = student.batch;
        this.avgBatchPsp = student.avgBatchPsp;
        this.psp = student.psp;
    }

    @Override
    public Student clone(){
        return new Student(this);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public double getAvgBatchPsp() {
        return avgBatchPsp;
    }

    public void setAvgBatchPsp(double avgBatchPsp) {
        this.avgBatchPsp = avgBatchPsp;
    }

    public double getPsp() {
        return psp;
    }

    public void setPsp(double psp) {
        this.psp = psp;
    }
}
