package com.scottbraaten.territorial.dao;

import com.scottbraaten.territorial.modal.Customer;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CustomerDAOImp implements CustomerDAO {
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Customer> get() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<Customer> query = currSession.createQuery("from Customer", Customer.class);
        List<Customer> list = query.getResultList();
        return list;
    }

    @Override
    public Customer get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        return currSession.get(Customer.class, id);
    }

    @Override
    public void save(Customer customer) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(customer);
    }

    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Customer cust = currSession.get(Customer.class, id);
        currSession.delete(cust);
    }
}
