package com.scottbraaten.territorial.service;
import java.util.List;

import com.scottbraaten.territorial.dao.CustomerDAO;
import com.scottbraaten.territorial.modal.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class CustomerServiceImp implements CustomerService {

    @Autowired
    private CustomerDAO customerDao;
    @Transactional
    @Override
    public List<Customer> get() {
        return customerDao.get();
    }
    @Transactional
    @Override
    public Customer get(int id) {
        return customerDao.get(id);
    }
    @Transactional
    @Override
    public void save(Customer customer) {
        customerDao.save(customer);

    }
    @Transactional
    @Override
    public void delete(int id) {
        customerDao.delete(id);

    }
}