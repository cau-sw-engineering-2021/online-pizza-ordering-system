package com.example.pizzaordering.repository;

import com.example.pizzaordering.vo.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findUserByNickname(String nickname);
    User findUserByName(String name);
    Boolean existsByNickname(String nickname);
    Boolean existsByName(String name);
}
