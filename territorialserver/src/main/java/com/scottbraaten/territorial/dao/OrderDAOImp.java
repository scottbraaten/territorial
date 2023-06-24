package com.scottbraaten.territorial.dao;

import com.scottbraaten.territorial.modal.Customer;
import com.scottbraaten.territorial.modal.Order;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderDAOImp implements OrderDAO {
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Order> get() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<Order> query = currSession.createQuery("from Order", Order.class);
        List<Order> list = query.getResultList();
        return list;
    }

    @Override
    public Order get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        return currSession.get(Order.class, id);
    }

    @Override
    public void save(Order order) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(order);
    }

    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Order order = currSession.get(Order.class, id);
        currSession.delete(order);
    }
}
