package com.example.pizzaordering.controller.common;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserController {
    /* TODO : menuRepository */
    /* TODO : itemRepository */


    /* TODO : Implement */
    @GetMapping("/user/address")
    public ResponseEntity<Object> getCartList() {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("address", "Seoul");
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
