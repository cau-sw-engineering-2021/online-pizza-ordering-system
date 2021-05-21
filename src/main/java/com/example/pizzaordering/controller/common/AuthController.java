package com.example.pizzaordering.controller;
import com.example.pizzaordering.dto.UserDto;
import com.example.pizzaordering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
@RestController
public class AuthController {
    @Autowired
    private UserService userService;
    // 회원가입
    @PostMapping("/join")
    public ResponseEntity<?> joinUser(@RequestBody UserDto userDto) {
        if(userService.join(userDto))
            return new ResponseEntity(HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.CONFLICT);
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> user) {
        if(userService.login(user.get("id"),user.get("password")))
            return new ResponseEntity(userService.getJwtToken(user.get("id")),HttpStatus.OK);
        else
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }
}
