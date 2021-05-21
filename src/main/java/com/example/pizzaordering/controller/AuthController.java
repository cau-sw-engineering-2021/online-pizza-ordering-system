package com.example.pizzaordering.controller;
import com.example.pizzaordering.VO.Role;
import com.example.pizzaordering.config.security.JwtTokenProvider;
import com.example.pizzaordering.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.pizzaordering.VO.User;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class AuthController {
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;
    // 회원가입
    @PostMapping("/join")
    public ResponseEntity<Object> join(@RequestBody Map<String, String> user) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            User newUser=new User(user.get("name"),user.get("id"),user.get("phoneNum"),user.get("address"),user.get("email"),
                    passwordEncoder.encode(user.get("password")),Role.USER);
            Long userId = userRepository.save(newUser).getId(); /* This Id is just identifier in resporitory */
            result.put("id", userId);
            retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        } catch (Exception e) {
            retval = new ResponseEntity<Object>(result, HttpStatus.BAD_REQUEST);
        }
        return retval;
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody Map<String, String> user) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            User member = userRepository.findUserByNickname(user.get("id"));
            if (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
                throw new IllegalArgumentException("잘못된 비밀번호입니다.");
            }
            List<String> roles = new ArrayList<>();
            roles.add(member.getRole().toString());
            String token = jwtTokenProvider.createToken(member.getName(),roles);
            result.put("jwt", token);
            retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            result.put("msg", "Wrong password");
            retval = new ResponseEntity<Object>(result, HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            result.put("msg", e.toString());
            retval = new ResponseEntity<Object>(result, HttpStatus.BAD_REQUEST);
        }
        return retval;
    }

    @GetMapping("/ping")
    public ResponseEntity<Object> ping() {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Object principal = SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
            if (principal instanceof UserDetails) {
                UserDetails detail = (UserDetails)principal;
                String username = detail.getUsername();
                List<String> roles = new ArrayList<String>();
                for (GrantedAuthority authority : detail.getAuthorities()) {
                    roles.add(authority.getAuthority());
                }
                result.put("username", username);
                result.put("roles", roles);
            } else {
                result.put("principal", principal);
                /* In this case, return anonymous user */
            }
            retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        } catch (Exception e) {
            result.put("msg", e.toString());
            retval = new ResponseEntity<Object>(result, HttpStatus.BAD_REQUEST);
        }

        return retval;
    }
}
