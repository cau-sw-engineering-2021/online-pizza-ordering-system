package com.example.pizzaordering.controller.orderpizza;

import com.example.pizzaordering.service.orderpizza.CartService;
import com.example.pizzaordering.service.orderpizza.MenuService;
import com.example.pizzaordering.vo.Item;
import com.example.pizzaordering.vo.Menu;
import com.example.pizzaordering.vo.Option;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class CartController {

    @Autowired
    CartService cartService;

    /*
    @param : Item | item
    return : true / false
     */
    @PostMapping("/cart/add")
    public ResponseEntity<Object> addToCart(@RequestParam Menu menu,
                                            @RequestParam Integer count,
                                            @RequestParam List<Option> optionList) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Item item = new Item();
            item.setMenu(menu);
            item.setCount(count);
            cartService.addToCart(item, optionList);
            result.put("success", true);
        } catch(Exception e){
            e.printStackTrace();
            result.put("success", false);
        }
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }


    /*
        @param : Item | item
        return : true / false
         */
    @PostMapping("/cart/remove")
    public ResponseEntity<Object> removeFromCart(@RequestParam Long itemId) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            cartService.removeFromCart(itemId);
            result.put("success", true);
        } catch(Exception e){
            result.put("success", false);
        }
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    /*
    @param : X
    return : List<Item> | cartList
     */
    @GetMapping("/cart/getCartList")
    public ResponseEntity<Object> getCartList() {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();

        // get cart item list
        result.put("cartList", cartService.getCartItemList());
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
  
}
