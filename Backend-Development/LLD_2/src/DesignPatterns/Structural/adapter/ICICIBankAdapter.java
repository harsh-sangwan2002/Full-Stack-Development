package DesignPatterns.Structural.adapter;

import DesignPatterns.Structural.adapter.thirdParty.icicibank.ICICIBank;

public class ICICIBankAdapter implements BankAPI{

    private final ICICIBank iciciBank = new ICICIBank();

    @Override
    public void sendMoney(String from, String to, int amount) {
        iciciBank.makePayment(to, from, amount);
    }

    @Override
    public void registerAccount(String accountName, String accountNumber) {
        System.out.println("Account " + accountName + " with number " + accountNumber + " registered with ICICIBank.");
    }

    @Override
    public long getBalance(String accountNumber) {
        System.out.println("Retrieving balance for account number " + accountNumber + " from ICICIBank.");
        return 10000; // Returning a dummy balance
    }
}
