package com.example.pizzaordering.repository;

import com.example.pizzaordering.vo.Order;
import org.springframework.data.repository.CrudRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Long> {
    List<Order> findAllByLastUpdateTimeBetween(LocalDateTime start, LocalDateTime end);
}
