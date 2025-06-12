package DesignPatterns.Structural.adapter;

public interface BankAPI {

    void sendMoney(String from, String to, int amount);
    void registerAccount(String accountName, String accountNumber);
    long getBalance(String accountNumber);
}
