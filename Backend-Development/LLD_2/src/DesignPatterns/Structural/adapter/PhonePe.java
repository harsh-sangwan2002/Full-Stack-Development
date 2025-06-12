package DesignPatterns.Structural.adapter;

public class PhonePe {

    // Ideally we should use Dependency Injection to inject the BankAPI implementation
    private static BankAPI bankAPI = new ICICIBankAdapter();

    public static void sendMoney(String from, String to, int amount) {
        bankAPI.sendMoney(from, to, amount);
    }

    public static void main(String[] args) {

        sendMoney("1234567890", "0987654321", 1000);
    }
}
