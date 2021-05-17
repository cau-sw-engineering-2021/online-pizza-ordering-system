package com.example.pizzaordering.controller;
import com.example.pizzaordering.VO.Role;
import com.example.pizzaordering.config.security.JwtTokenProvider;
import com.example.pizzaordering.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.pizzaordering.VO.User;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
@RequiredArgsConstructor
@RestController
public class AuthController {
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;
    // 회원가입
    @PostMapping("/join")
    public Long join(@RequestBody Map<String, String> user) {
        User newUser=new User(user.get("name"),user.get("id"),user.get("phoneNum"),user.get("address"),user.get("email"),
                passwordEncoder.encode(user.get("password")),Role.USER);
        return userRepository.save(newUser).getId();
    }

    // 로그인
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> user) {
        User member = userRepository.findUserByNickname(user.get("id"));
        if (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        List<String> roles=new ArrayList<>();
        roles.add(member.getRole().toString());
        return jwtTokenProvider.createToken(member.getName(),roles);
    }
}
