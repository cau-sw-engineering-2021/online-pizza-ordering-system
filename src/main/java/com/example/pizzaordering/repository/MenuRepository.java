package com.example.pizzaordering.repository;

import com.example.pizzaordering.dto.ShowMenuDto;
import com.example.pizzaordering.vo.Menu;
import com.example.pizzaordering.vo.User;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MenuRepository extends CrudRepository<Menu, Long> {
    List<Menu> findAll();
    List<Menu> findAll(Sort name);
    //List<Menu> findAllOrderByName();
    Menu findMenuById(Long id);
    List<Menu> findAllByName(String name);


}
