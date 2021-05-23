package com.example.pizzaordering.repository;

import com.example.pizzaordering.vo.Order;
import org.springframework.data.repository.CrudRepository;

import java.sql.Date;
import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Long> {
    List<Order> findAllByLastUpdateTimeBetween(Date start, Date end);
}
