package com.example.pizzaordering.controller.orderpizza;
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
public class CartController {
    /* TODO : menuRepository */
    /* TODO : itemRepository */


    /* TODO : Implement */
    @GetMapping("/cart")
    public ResponseEntity<Object> getCartList() {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        List<Integer> cartList = new ArrayList<Integer>();
        cartList.add(Integer.valueOf(1));
        cartList.add(Integer.valueOf(2));
        result.put("cart", cartList);
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    /* TODO : Implement */
    @PostMapping("/cart/add")
    public ResponseEntity<Object> addItem(@RequestBody Map<String, Object> item) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        Integer itemId = (Integer)item.get("id");
        /* TODO : add item to cart */
        result.put("msg", "success");
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    @PostMapping("/cart/remove")
    public ResponseEntity<Object> removeItem(@RequestBody Map<String, Object> item) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        Integer itemId = (Integer)item.get("id");
        /* TODO : add item to cart */
        result.put("msg", "success");
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
