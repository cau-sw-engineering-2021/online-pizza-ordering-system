package com.example.pizzaordering.controller.management;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

import com.example.pizzaordering.vo.Menu;
import com.example.pizzaordering.vo.Order;
import com.example.pizzaordering.vo.Item;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class SaleController {
    @GetMapping("/saleslist")
    public ResponseEntity<Object> menuList(@RequestParam String start, @RequestParam String end) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("start", start);
        result.put("end", end);
        result.put("msg", "success");
        List<Order> sales = new ArrayList<Order>();
        result.put("sales", sales);
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
