package com.scottbraaten.territorial.controller;

import java.util.List;

import com.scottbraaten.territorial.modal.Order;
import com.scottbraaten.territorial.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/orderapi")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/order")
    public List<Order> get() {
        return orderService.get();
    }

    @PostMapping("/order")
    public Order save(@RequestBody Order order) {
        orderService.save(order);
        return order;
    }

    @GetMapping("/order/{id}")
    public Order get(@PathVariable int id) {
        return orderService.get(id);
    }

    @DeleteMapping("/order/{id}")
    public String delete(@PathVariable int id) {

        orderService.delete(id);

        return "Order removed with id "+id;

    }

    @PutMapping("/order")
    public Order update(@RequestBody Order order) {
        orderService.save(order);
        return order;
    }
}