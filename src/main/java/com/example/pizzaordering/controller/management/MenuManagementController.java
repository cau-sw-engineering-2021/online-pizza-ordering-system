package com.example.pizzaordering.controller.management;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

import com.example.pizzaordering.vo.Menu;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class MenuManagementController {

    /* TODO : Implement */
    @PostMapping("/menu/add")
    public ResponseEntity<Object> addMenu(Map<String, Object> item) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("msg", "success");
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
