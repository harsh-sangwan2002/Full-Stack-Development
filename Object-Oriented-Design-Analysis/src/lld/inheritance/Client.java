package lld.inheritance;

public class Client {

    public static void main(String[] args) {

        TA ta = new TA();
        ta.name = "Naman";


        Mentor mentor = new Mentor();
        mentor.name = "Naman";

        Student st = new Student();
        st.batch = "Aacd_Dec_2023";
        st.name = "Naman";
        st.psp = 98.00;
        st.pauseBatch();
        st.changeName("Sudhanshu");
    }
}
