package com.example.pizzaordering.controller.management;
import com.example.pizzaordering.service.management.DisplaySalesOperator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;

import java.sql.Date;
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
    @Autowired
    DisplaySalesOperator displaySalesOperator;
    @GetMapping("/saleslist")
    public ResponseEntity<Object> salesList(@RequestParam String start, @RequestParam String end) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("start", start);
        result.put("end", end);
        Date startD=Date.valueOf(start);
        Date endD=Date.valueOf(end);
        result.put("msg", "success");
        List<Order> sales = displaySalesOperator.displaySales(startD,endD);
        result.put("sales", sales);
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
