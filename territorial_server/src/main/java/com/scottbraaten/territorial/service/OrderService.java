package com.scottbraaten.territorial.service;

import com.scottbraaten.territorial.modal.Customer;
import com.scottbraaten.territorial.modal.Order;

import java.util.List;

public interface OrderService {
    List<Order> get();
    Order get(int id);
    void save(Order order);
    void delete(int id);
}
