package com.example.pizzaordering.controller.orderpizza;

import com.example.pizzaordering.service.orderpizza.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

import com.example.pizzaordering.vo.Menu;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class MenuController {

    @Autowired
    MenuService menuService;

    /*
    params : X
    return : List<ShowMenuDto> : menuList
     */
    @GetMapping("/menuList")
    public ResponseEntity<Object> menuList() {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();
        /* Dummy Code start */
        List<Menu> menus = new ArrayList<Menu>();
        Menu menu1 = new Menu();
        menu1.setId(Long.valueOf(1));
        menu1.setName("Pizza1");
        menu1.setPrice(20000);
        menu1.setSize("L");
        menu1.setDetail("No cheese");
        menu1.setImgLocation("https://user-images.githubusercontent.com/17357596/119155795-80906080-ba8e-11eb-8674-2bbec6b96138.png");
        Menu menu2 = new Menu();
        menu2.setId(Long.valueOf(2));
        menu2.setName("Pizza2");
        menu2.setPrice(20000);
        menu2.setSize("M");
        menu2.setDetail("Too many Cheese");
        menu2.setImgLocation("https://user-images.githubusercontent.com/17357596/119155795-80906080-ba8e-11eb-8674-2bbec6b96138.png");

        menus.add(menu1);
        menus.add(menu2);
        result.put("menu", menus);
        /* Dummy Code End */
        // get All Menu
        result.put("menuList", menuService.getMenuList());
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }

    /*
    @param : name - String : name
    return : ShowMenuDto : menu
     */
    @GetMapping("/menu/{name}")
    public ResponseEntity<Object> menuDetails(@PathVariable String name) {
        ResponseEntity<Object> retval = null;
        Map<String, Object> result = new HashMap<String, Object>();

        // get one menu by name
        result.put("menu", menuService.getMenuDetailByName(name));
        retval = new ResponseEntity<Object>(result, HttpStatus.OK);
        return retval;
    }
}
