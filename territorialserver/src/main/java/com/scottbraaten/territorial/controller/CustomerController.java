package com.scottbraaten.territorial.controller;

import java.util.List;

import com.scottbraaten.territorial.modal.Customer;
import com.scottbraaten.territorial.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/customerapi")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/test")
    public String test() {
        return "HEY";
    }

    @GetMapping("/customer")
    public List<Customer> get() {
//        return String.format(customerService.get());
        return customerService.get();
    }

    @PostMapping("/customer")
    public Customer save(@RequestBody Customer customer) {
        customerService.save(customer);
        return customer;
    }

    @GetMapping("/customer/{id}")
    public Customer get(@PathVariable int id) {
        return customerService.get(id);
    }

    @DeleteMapping("/customer/{id}")
    public String delete(@PathVariable int id) {

        customerService.delete(id);

        return "Customer removed with id "+id;

    }

    @PutMapping("/customer")
    public Customer update(@RequestBody Customer customer) {
        customerService.save(customer);
        return customer;
    }
}