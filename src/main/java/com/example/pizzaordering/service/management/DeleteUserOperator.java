package com.example.pizzaordering.service.management;

import com.example.pizzaordering.repository.UserRepository;
import com.example.pizzaordering.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeleteUserOperator {
    @Autowired
    UserRepository userRepository;
    public boolean deleteUser(String userId){
        if(!userRepository.existsByNickname(userId))
            return false;
        User user=userRepository.findUserByNickname(userId);
        userRepository.delete(user);
        return true;
    }
}
