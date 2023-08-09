package com.codsoft.atm.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codsoft.atm.model.Transaction;

@Repository
public interface TransactionRepo extends JpaRepository<Transaction, Integer> {
    Transaction findByTransactId(String id);
}
