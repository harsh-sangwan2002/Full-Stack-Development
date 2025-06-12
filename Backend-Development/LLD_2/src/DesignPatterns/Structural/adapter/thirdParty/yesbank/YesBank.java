package DesignPatterns.Structural.adapter.thirdParty.yesbank;

public class YesBank {

    public void transferMoney(int amount, String from, String to) {
        System.out.println("Transferring " + amount + " from " + from + " to " + to + " using YesBank.");
    }
}
