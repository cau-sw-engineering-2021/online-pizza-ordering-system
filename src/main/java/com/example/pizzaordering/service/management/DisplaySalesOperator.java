package com.example.pizzaordering.service.management;


import com.example.pizzaordering.repository.OrderRepository;
import com.example.pizzaordering.vo.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class DisplaySalesOperator {
    @Autowired
    OrderRepository orderRepository;
    public List<Order> displaySales(String start, String end){
        LocalDate startDate = LocalDate.parse(start, DateTimeFormatter.ISO_DATE);
        LocalDate endDate = LocalDate.parse(end, DateTimeFormatter.ISO_DATE);
        LocalTime zero=LocalTime.of(0,0,0);
        LocalTime last=LocalTime.of(23,59,59);
        LocalDateTime startLocalDateTime=LocalDateTime.of(startDate,zero);
        LocalDateTime endLocalDateTime=LocalDateTime.of(endDate,last);
        List<Order> orderList=orderRepository.findAllByLastUpdateTimeBetween(startLocalDateTime,endLocalDateTime);
        return orderList;
    }
}
