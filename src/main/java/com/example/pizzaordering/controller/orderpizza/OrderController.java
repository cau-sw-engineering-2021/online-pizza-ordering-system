package com.example.pizzaordering.controller.orderpizza;

import com.example.pizzaordering.dto.UserDto;
import com.example.pizzaordering.service.common.UserService;
import com.example.pizzaordering.service.orderstatus.OrderListService;
import com.example.pizzaordering.vo.Item;
import com.example.pizzaordering.vo.Order;
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
public class OrderController {

    @Autowired
    OrderListService orderListService;


    /*
    params : orderInformation | String - deliveryType, Integer - totalPrice
           : itemList | [{"menuId" : Integer }, {"count" Integer}]
     */
    @PostMapping("/order")
    public ResponseEntity<Object> order(@RequestBody Order orderInformation,
                                        @RequestParam List<Map<String, Integer>> itemList) {

        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();

        orderListService.createOrder(orderInformation, itemList);
        result.put("msg", "success");

        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
