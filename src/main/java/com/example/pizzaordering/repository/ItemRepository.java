package com.example.pizzaordering.repository;

import com.example.pizzaordering.vo.CartItem;
import com.example.pizzaordering.vo.Item;
import com.example.pizzaordering.vo.Menu;
import com.example.pizzaordering.vo.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ItemRepository extends CrudRepository<Item, Long> {

    Item save(Item item);

}
