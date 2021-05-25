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

    @PostMapping("/order/accept")
    public ResponseEntity<Object> acceptOrder(@RequestBody Map<String, Object> param) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Long orderId = Long.valueOf((Integer)param.get("orderId"));
            if (orderlist.updateOrderStatus(orderId, "ACCEPTED")) {
                result.put("msg", "success");
            } else {
                result.put("msg", "fail");
            }
        } catch (Exception e) {
            result.put("msg", e.toString());
        }
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    @PostMapping("/order/reject")
    public ResponseEntity<Object> rejectOrder(@RequestBody Map<String, Object> param) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Long orderId = Long.valueOf((Integer)param.get("orderId"));
            if (orderlist.updateOrderStatus(orderId, "REJECTED")) {
                result.put("msg", "success");
            } else {
                result.put("msg", "fail");
            }
        } catch (Exception e) {
            result.put("msg", e.toString());
        }
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    @PostMapping("/order/complete-cook")
    public ResponseEntity<Object> completeCook(@RequestBody Map<String, Object> param) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Long orderId = Long.valueOf((Integer)param.get("orderId"));
            if (orderlist.updateOrderStatus(orderId, "COOK_COMPLETED")) {
                result.put("msg", "success");
            } else {
                result.put("msg", "fail");
            }
        } catch (Exception e) {
            result.put("msg", e.toString());
        }
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    @PostMapping("/order/serve")
    public ResponseEntity<Object> serveOrder(@RequestBody Map<String, Object> param) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Long orderId = Long.valueOf((Integer)param.get("orderId"));
            if (orderlist.updateOrderStatus(orderId, "SERVED")) {
                result.put("msg", "success");
            } else {
                result.put("msg", "fail");
            }
        } catch (Exception e) {
            result.put("msg", e.toString());
        }
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    @PostMapping("/order/start-delivery")
    public ResponseEntity<Object> startDelivery(@RequestBody Map<String, Object> param) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Long orderId = Long.valueOf((Integer)param.get("orderId"));
            if (orderlist.updateOrderStatus(orderId, "DELIVERING")) {
                result.put("msg", "success");
            } else {
                result.put("msg", "fail");
            }
        } catch (Exception e) {
            result.put("msg", e.toString());
        }
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    @PostMapping("/order/complete-delivery")
    public ResponseEntity<Object> completeDelivery(@RequestBody Map<String, Object> param) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Long orderId = Long.valueOf((Integer)param.get("orderId"));
            if (orderlist.updateOrderStatus(orderId, "DELIVERY_COMPLETED")) {
                result.put("msg", "success");
            } else {
                result.put("msg", "fail");
            }
        } catch (Exception e) {
            result.put("msg", e.toString());
        }
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    @PostMapping("/order/emergency")
    public ResponseEntity<Object> emergency(@RequestBody Map<String, Object> param) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            Long orderId = Long.valueOf((Integer)param.get("orderId"));
            if (orderlist.updateOrderStatus(orderId, "INVALID")) {
                result.put("msg", "success");
            } else {
                result.put("msg", "fail");
            }
        } catch (Exception e) {
            result.put("msg", e.toString());
        }
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

}
