package DesignPatterns.Structural.adapter.thirdParty.icicibank;

public class ICICIBank {

    public void makePayment(String to, String from, int amount) {
        System.out.println("Transferring " + amount + " from " + from + " to " + to + " using ICICIBank.");
    }
}
