package com.example.pizzaordering.repository;

import com.example.pizzaordering.vo.Item;
import com.example.pizzaordering.vo.Option;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OptionRepository extends CrudRepository<Option, Long> {

    Option save(Option option);
    //List<Option> saveAll(List<Option> optionList);
}
