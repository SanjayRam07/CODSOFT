package com.codsoft.atm.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codsoft.atm.model.Transaction;
import com.codsoft.atm.service.AccountService;
import com.codsoft.atm.service.TransactionService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    AccountService accountService;

    @Autowired
    TransactionService transactionService;
    
    @PostMapping(value="/deposit")
    public String deposit(@RequestParam String accNo, @RequestParam String password, @RequestParam Integer amt) {
        if(accountService.depositBalance(accNo, password, amt)) {
            transactionService.deposit(accNo, amt);
            return "deposit success";
        }
        return "deposit failed";
    }

    @PostMapping(value="/withdraw")
    public String withdraw(@RequestParam String accNo, @RequestParam String password, @RequestParam Integer amt) {
        if(accountService.withdrawBalance(accNo, password, amt)) {
            transactionService.withdraw(accNo, amt);
            return "withdraw success";
        }
        return "withdraw failed";
    }

    @PostMapping("/transfer")
    public String transfer(@RequestParam String accFrom, @RequestParam String accTo, @RequestParam String password, @RequestParam int amt) {
        if(accountService.transferBalance(accFrom, accTo, password, amt)) {
            transactionService.transfer(accFrom, accTo, amt);
            return "transfer success";
        }
        return "transfer failed";
    }

    @GetMapping("/getAllTransaction") 
    public List<Transaction> getAllTransaction() {
        return transactionService.findAllTransaction();
    }

    @GetMapping("/getById")
    public Transaction getById(String id) {
        return transactionService.findById(id);
    }
}
