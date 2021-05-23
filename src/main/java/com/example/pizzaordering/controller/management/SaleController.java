package com.example.pizzaordering.controller.management;
import com.example.pizzaordering.service.management.DisplaySalesOperator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import com.example.pizzaordering.vo.Order;

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
        result.put("msg", "success");
        List<Order> sales = displaySalesOperator.displaySales(start,end);
        result.put("sales", sales);
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
