package com.scottbraaten.territorial.dao;

import com.scottbraaten.territorial.modal.Customer;

import java.util.List;

public interface CustomerDAO {
    List<Customer> get();

    Customer get(int id);

    void save(Customer customer);

    void delete(int id);
}
