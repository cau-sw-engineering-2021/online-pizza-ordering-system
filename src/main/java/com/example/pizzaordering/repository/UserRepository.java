package com.example.pizzaordering.repository;

import com.example.pizzaordering.vo.User;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findUserByNickname(String nickname);
    User findUserByName(String name);
    Boolean existsByNickname(String nickname);
    List<User> findAll();
    Boolean existsByName(String name);
}
