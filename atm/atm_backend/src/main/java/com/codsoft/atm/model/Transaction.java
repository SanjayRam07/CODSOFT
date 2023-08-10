package com.codsoft.atm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name="transaction")
public class Transaction {

    @JsonIgnore
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    @Id
    @JsonIgnore
    private String transactId;

    private String accountFrom;
    private String accountTo;
    @NotNull private String transactType;
    @NotNull private Integer transactAmount;
    
    public Integer getId() {
        return Id;
    }
    public void setId(Integer id) {
        Id = id;
    }
    public String getTransactId() {
        return transactId;
    }
    public void setTransactId(String transactId) {
        this.transactId = transactId;
    }
    public String getAccountFrom() {
        return accountFrom;
    }
    public void setAccountFrom(String accountFrom) {
        this.accountFrom = accountFrom;
    }
    public String getAccountTo() {
        return accountTo;
    }
    public void setAccountTo(String accountTo) {
        this.accountTo = accountTo;
    }
    public String getTransactType() {
        return transactType;
    }
    public void setTransactType(String transactType) {
        this.transactType = transactType;
    }
    public Integer getTransactAmount() {
        return transactAmount;
    }
    public void setTransactAmount(Integer transactAmount) {
        this.transactAmount = transactAmount;
    }

}
