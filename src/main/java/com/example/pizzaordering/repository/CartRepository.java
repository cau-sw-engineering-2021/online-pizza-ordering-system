package com.example.pizzaordering.repository;

import com.example.pizzaordering.vo.CartItem;
import com.example.pizzaordering.vo.Item;
import com.example.pizzaordering.vo.Menu;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CartRepository extends CrudRepository<CartItem, Long> {

    CartItem save(CartItem item);


}
