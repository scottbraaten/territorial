package com.scottbraaten.territorial.dao;

import com.scottbraaten.territorial.modal.Order;

import java.util.List;

public interface OrderDAO {
    List<Order> get();

    Order get(int id);

    void save(Order order);

    void delete(int id);
}
