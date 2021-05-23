package com.example.pizzaordering.controller.common;

import com.example.pizzaordering.dto.UserDto;
import com.example.pizzaordering.service.common.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private UserService userService;
    // 회원가입
    @PostMapping("/join")
    public ResponseEntity<Object> joinUser(@RequestBody UserDto userDto) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            if (userService.join(userDto)) {
                result.put("msg", "success");
                retval = new ResponseEntity<Object>(result, HttpStatus.OK);
            }
            else {
                result.put("msg", "duplicated nickname");
                retval = new ResponseEntity<Object>(result, HttpStatus.CONFLICT);
            }
        } catch (Exception e) {
            result.put("msg", e.toString());
            retval = new ResponseEntity<Object>(result, HttpStatus.BAD_REQUEST);
        }
        return retval;
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody Map<String, String> user) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            if (userService.login(user.get("id"),user.get("password"))) {
                String jwt = userService.getJwtToken(user.get("id"));
                result.put("jwt", jwt);
                retval = new ResponseEntity<Object>(result, HttpStatus.OK);
            }
            else {
                result.put("msg", "wrong information");
                retval = new ResponseEntity<Object>(result, HttpStatus.UNAUTHORIZED);
            }
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
            retval = new ResponseEntity<Object>(result, HttpStatus.OK);
            String username = userService.getUsername();
            List<String> roles = userService.getRoleNames();
            result.put("username", username);
            result.put("roles", roles);
        } catch (Exception e) {
            result.put("msg", e.toString());
            retval = new ResponseEntity<Object>(result, HttpStatus.BAD_REQUEST);
        }
        return retval;
    }
}
