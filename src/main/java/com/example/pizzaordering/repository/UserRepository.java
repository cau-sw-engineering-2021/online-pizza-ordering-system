package com.example.pizzaordering.repository;

import com.example.pizzaordering.VO.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findUserByNickname(String nickname);
}
