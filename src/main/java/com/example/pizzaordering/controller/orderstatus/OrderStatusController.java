package com.example.pizzaordering.controller.orderstatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.pizzaordering.service.orderstatus.OrderListService;

import com.example.pizzaordering.vo.Menu;
import com.example.pizzaordering.vo.Order;
import com.example.pizzaordering.vo.Item;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class OrderStatusController {
    @Autowired
    OrderListService orderlist;

    @GetMapping("/order")
    public ResponseEntity<Object> getOrderList() {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("order", orderlist.getOrderList());
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    @GetMapping("/order/display")
    public ResponseEntity<Object> getOrderDisplayList() {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("order", orderlist.getOrderDisplayList());
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    @GetMapping("/order/isUpdated")
    public ResponseEntity<Object> isUpdated() {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("updated", orderlist.isUpdated());
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    @PostMapping("/order/change-status")
    public ResponseEntity<Object> changeOrderStatus(Map<String, Object> param) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        Long orderId = (Long)param.get("orderId");
        String nextState = (String)param.get("nextState");
        if (orderlist.updateOrderStatus(orderId, nextState)) {
            result.put("msg", "success");
        } else {
            result.put("msg", "fail");
        }
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
