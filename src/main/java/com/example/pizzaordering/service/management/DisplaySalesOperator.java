package com.example.pizzaordering.service.management;


import com.example.pizzaordering.repository.OrderRepository;
import com.example.pizzaordering.vo.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class DisplaySalesOperator {
    @Autowired
    OrderRepository orderRepository;
    public List<Order> displaySales(Date start, Date end){
        List<Order> orderList=orderRepository.findAllByLastUpdateTimeBetween(start,end);
        return orderList;
    }
}
