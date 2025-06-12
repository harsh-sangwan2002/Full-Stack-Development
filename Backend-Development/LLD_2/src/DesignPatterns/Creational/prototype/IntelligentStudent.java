package DesignPatterns.Creational.prototype;

public class IntelligentStudent extends Student{

    int iq;

    public IntelligentStudent() {
        super();
    }

    public IntelligentStudent(IntelligentStudent student){
        super(student);
        this.iq = 150; // Default IQ for IntelligentStudent
    }

    @Override
    public Student clone() {
        return new IntelligentStudent(this);
    }

    public int getIq() {
        return iq;
    }

    public void setIq(int iq) {
        this.iq = iq;
    }
}
