package com.example.pizzaordering.controller.management;
import com.example.pizzaordering.service.common.UserService;
import com.example.pizzaordering.service.management.DeleteUserOperator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

import com.example.pizzaordering.vo.Menu;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class ManagementController {
    @Autowired
    DeleteUserOperator deleteUserOperator;
    /* TODO : Implement */
    @PostMapping("/user/delete")
    public ResponseEntity<?> deleteUser(Map<String, String> user) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        if(deleteUserOperator.deleteUser(user.get("id"))) {
            result.put("msg", "success");
            retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        }
        else{
            result.put("msg", "fail");
            retval = new ResponseEntity<Object>(result, HttpStatus.NOT_FOUND);
        }
        return retval;
    }
}

