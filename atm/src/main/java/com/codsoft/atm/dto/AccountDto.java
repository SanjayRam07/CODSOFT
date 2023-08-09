package com.codsoft.atm.dto;

import com.codsoft.atm.model.Account;

public class AccountDto {
    
    private String accNo;
    private String accHolderName;
    private String accType;
    private Integer balance;

    public AccountDto(Account account) {
        this.accNo=account.getAccNo();
        this.accHolderName=account.getAccHolderName();
        this.accType=account.getAccType();
        this.balance=account.getBalance();
    }

    public String getAccNo() {
        return accNo;
    }
    public void setAccNo(String accNo) {
        this.accNo = accNo;
    }
    public String getAccHolderName() {
        return accHolderName;
    }
    public void setAccHolderName(String accHolderName) {
        this.accHolderName = accHolderName;
    }
    public String getAccType() {
        return accType;
    }
    public void setAccType(String accType) {
        this.accType = accType;
    }
    public Integer getBalance() {
        return balance;
    }
    public void setBalance(Integer balance) {
        this.balance = balance;
    }

}

