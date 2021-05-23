package com.example.pizzaordering.repository;

import com.example.pizzaordering.vo.Menu;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MenuRepository extends CrudRepository<Menu, Long> {
    List<Menu> findAll();
}
