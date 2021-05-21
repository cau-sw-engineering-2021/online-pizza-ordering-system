package com.example.pizzaordering.service.common;

import com.example.pizzaordering.config.security.JwtTokenProvider;
import com.example.pizzaordering.dto.UserDto;
import com.example.pizzaordering.repository.UserRepository;
import com.example.pizzaordering.vo.Role;
import com.example.pizzaordering.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    public boolean login (String userId, String userPw){
        if(!userRepository.existsByNickname(userId))
            return false;
        User member = userRepository.findUserByNickname(userId);
        if (!passwordEncoder.matches(userPw, member.getPassword()))
            return false;
        else
            return true;
    }
    public boolean join (UserDto userDto){
        if(userRepository.existsByNickname(userDto.getNickname()))
            return false;
        else{
            User newUser=new User(userDto.getName(),userDto.getNickname(),userDto.getPhoneNum(),
                    userDto.getAddress(),userDto.getEmail(),
                    passwordEncoder.encode(userDto.getPassword()), Role.USER);
            userRepository.save(newUser);
            return true;
        }
    }
    public String getJwtToken(String userId){
        if(!userRepository.existsByNickname(userId))
            return null;
        User member=userRepository.findUserByNickname(userId);
        List<String> roles=new ArrayList<>();
        roles.add(member.getRole().toString());
        return jwtTokenProvider.createToken(member.getName(),roles);
    }
    public User getUser (String userId){
        if(!userRepository.existsByNickname(userId))
            return null;
        else
            return userRepository.findUserByNickname(userId);
    }
}
