package com.scottbraaten.territorial.service;
import java.util.List;

import com.scottbraaten.territorial.dao.OrderDAO;
import com.scottbraaten.territorial.modal.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class OrderServiceImp implements OrderService {

    @Autowired
    private OrderDAO orderDao;
    @Transactional
    @Override
    public List<Order> get() {
        return orderDao.get();
    }
    @Transactional
    @Override
    public Order get(int id) {
        return orderDao.get(id);
    }
    @Transactional
    @Override
    public void save(Order order) {
        orderDao.save(order);

    }
    @Transactional
    @Override
    public void delete(int id) {
        orderDao.delete(id);

    }
}