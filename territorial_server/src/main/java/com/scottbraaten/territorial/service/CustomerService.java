package com.scottbraaten.territorial.service;

import com.scottbraaten.territorial.modal.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> get();
    Customer get(int id);
    void save(Customer customer);
    void delete(int id);
}
