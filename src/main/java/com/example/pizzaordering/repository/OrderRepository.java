package com.example.pizzaordering.repository;

import com.example.pizzaordering.vo.Order;
import org.springframework.data.repository.CrudRepository;

import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Long> {
    public List<Order> findAllByOrderStatusIn(List<String> status);
    List<Order> findAllByLastUpdateTimeBetweenOrderByLastUpdateTime(Timestamp start, Timestamp end);
    List<Order> findAllByOrderByLastUpdateTime();
}
