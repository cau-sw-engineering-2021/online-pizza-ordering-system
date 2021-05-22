package com.example.pizzaordering.controller.orderpizza;

import com.example.pizzaordering.dto.UserDto;
import com.example.pizzaordering.service.common.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
public class OrderController {

    @PostMapping("/order")
    public ResponseEntity<Object> joinUser(@RequestBody Map<String, Object> order) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();

        result.put("msg", "success");

        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
