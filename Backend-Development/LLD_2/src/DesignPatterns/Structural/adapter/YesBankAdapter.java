package DesignPatterns.Structural.adapter;

import DesignPatterns.Structural.adapter.thirdParty.yesbank.YesBank;

public class YesBankAdapter implements BankAPI {

    private final YesBank yesBank = new YesBank();

    @Override
    public void sendMoney(String fromAccount, String toAccount, int amount) {
        yesBank.transferMoney(amount, fromAccount, toAccount);
    }

    @Override
    public void registerAccount(String accountName, String accountNumber) {

    }

    @Override
    public long getBalance(String accountNumber) {
        return (long) 1.2;
    }
}
