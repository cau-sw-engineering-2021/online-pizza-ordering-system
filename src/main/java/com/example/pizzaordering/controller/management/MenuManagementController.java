package com.example.pizzaordering.controller.management;
import com.example.pizzaordering.dto.MenuDto;
import com.example.pizzaordering.dto.PureMenuDto;
import com.example.pizzaordering.dto.PureUserDto;
import com.example.pizzaordering.repository.MenuRepository;
import com.example.pizzaordering.service.management.AddMenuOperator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

import com.example.pizzaordering.vo.Menu;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class MenuManagementController {
    @Autowired
    AddMenuOperator addMenuOperator;
    @Autowired
    MenuRepository menuRepository;
    @PostMapping("/menu/add")
    public ResponseEntity<Object> addMenu(Map<String, Object> item) throws IOException {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        if(addMenuOperator.addMenu((MenuDto)item.get("menu")))
            result.put("msg", "success");
        else
            result.put("msg","fail");
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
    @GetMapping("/menu/menulist")
    public ResponseEntity<?> getMenuList(){
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        List<PureMenuDto> menuList=menuRepository.findAll().stream().map(PureMenuDto::of).collect(Collectors.toList());
        result.put("msg","success");
        result.put("menulist",menuList);
        retval=new ResponseEntity<>(result,HttpStatus.OK);
        return retval;
    }
}
