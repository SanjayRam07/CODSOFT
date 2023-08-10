package com.codsoft.atm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codsoft.atm.model.Account;
import com.codsoft.atm.repo.AccountRepo;

@Service
public class AccountValidate {

    @Autowired
    AccountRepo accountRepo;

    public boolean validate(String accNo, String password) {
        Account account=accountRepo.findByAccNo(accNo);
        if(account.getPassword()==null || account.getPassword().equals(password)) 
            return true;
        else
            return false;
    }
    
}
